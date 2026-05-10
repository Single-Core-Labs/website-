---
name: kling-motion-web-p
description: "Use when building luxury landing pages with Kling image-to-video AI, GPT Image stills, pinned 'stop scroll' scenes, and scroll-driven frame sequences. Requires FAL_KEY env var (fal.ai) — ask user before any call."
source: https://fal.ai/models/fal-ai/kling-video
generated: 2026-05-07T20:57:38.203Z
category: tool
audience: creators
---

## When to use

- Before any Kling/fal call: confirm FAL_KEY is set; if missing, stop and ask the user to set it (https://fal.ai/dashboard/keys) — do not silently fall back to another model
- Luxury or agency-style landing pages where motion sells the product
- Pinned 'stop scroll' storytelling sections with scroll-scrubbed video or frame sequences
- 3D product or architecture hero scenes (rotating globes, space stations, exploded views)
- AI-generated hero assets — GPT Image stills + Kling image-to-video — integrated as hero or sequence

## Key concepts

### FAL_KEY (required)

Every Kling generation goes through fal.ai, which authenticates via the FAL_KEY env var. The @fal-ai/client picks it up from process.env.FAL_KEY automatically; otherwise call fal.config({ credentials: process.env.FAL_KEY }). Before any generation step, verify FAL_KEY is set — if missing, halt and ask the user to grab one at https://fal.ai/dashboard/keys and export it. Never hard-code the key, never check it into source, and never silently substitute a different provider.

### stop scroll

A pinned/sticky storytelling section with extra parent height (250–400vh). The visual stage stays sticky at top:0 while scroll progress drives the animation. Text beats fade or translate in sequence as the asset frame changes. Always ship a reduced-motion fallback that stacks a still frame and the text vertically.

### Kling image-to-video

Generates short cinematic motion — hero loops, rotating objects, exploded views — from a single still. Prefer model id fal-ai/kling-video/v3/standard/image-to-video. Use it only when a still needs believable motion, camera movement, or stable rotation; not for primary content.

### scroll-scrubbed sequence

Drive video.currentTime from scroll progress for prototypes, or extract optimized JPEG/WebP frames and map frame index to scroll for production. Pause the video — never autoplay or loop a scroll-driven hero. Preload nearby frames and size them consistently so scrolling never causes layout shift.

### asset masking

Inward gradient masks blend the asset into the page background. Use the lightest mask that preserves text readability — heavy dark radials make product media look blurry or muddy. Match asset background to page background; otherwise strengthen top/bottom/side masks until no dividing band is visible.

### GPT Image source still

Generate source frames locally in Codex with the configured OpenAI GPT Image model (gpt-image-2 if exposed, else gpt-image-1.5 for quality or gpt-image-1-mini for cost). Kling adds motion afterward — never use Kling as the source-image step.

### fal canvas normalization

fal/Kling rejects images below its minimum dimensions. Pad small or oddly-shaped stills onto a 1280x720 or 1024x1024 canvas before upload. When using start_image_url + end_image_url, keep both images at identical dimensions and aspect ratio.

## API reference

```
FAL_KEY precondition (run first)
```

Before invoking any Kling/fal endpoint, fail fast when FAL_KEY is missing and surface a copy-pasteable instruction. Ask the user instead of silently degrading or switching models.

```
if (!process.env.FAL_KEY) {
  throw new Error(
    'FAL_KEY is required for Kling generation.\n' +
    'Get one at https://fal.ai/dashboard/keys, then:\n' +
    '  export FAL_KEY=fal-...'
  );
}
import { fal } from '@fal-ai/client';
fal.config({ credentials: process.env.FAL_KEY });
const result = await fal.subscribe(
  'fal-ai/kling-video/v3/standard/image-to-video',
  { input: { prompt, image_url } }
);
```

```
<video autoplay muted loop playsinline>
```

Standard hero-loop tag for Kling-generated 5-second cinematic videos with stable center mass.

```
<video
  autoplay
  muted
  loop
  playsinline
  src="/hero.mp4"
  class="hero-video"
></video>
```

```
Pinned scroll-scrubbed hero (sticky child + 180–240svh parent)
```

Wrap a sticky child in a taller parent so scroll progress can advance video.currentTime. Pause the video and set currentTime from progress — never autoplay or loop a scroll-driven hero.

```
<div style="min-height: 200svh">
  <div class="sticky top-0 h-screen">
    <video id="hero" muted playsinline preload="auto" src="/hero.mp4"></video>
  </div>
</div>
<script>
  const v = document.getElementById('hero');
  v.pause();
  const update = () => {
    const t = window.scrollY / (document.body.scrollHeight - innerHeight);
    if (v.duration) v.currentTime = v.duration * Math.min(Math.max(t, 0), 1);
  };
  v.addEventListener('loadedmetadata', update);
  window.addEventListener('scroll', update, { passive: true });
</script>
```

```
fal-ai/kling-video/v3/standard/image-to-video
```

Default model id for API-based Kling 3.0 image-to-video generation. Pass start_image_url for static-to-motion; add end_image_url when the model supports start-to-end reveals.

```
@media (prefers-reduced-motion: reduce)
```

Reduced-motion fallback: collapse the pinned hero, hide the video, and reveal a still fallback frame so the page is usable without scroll-driven animation.

```
@media (prefers-reduced-motion: reduce) {
  .scroll-hero { min-height: auto; }
  .scroll-hero .sticky-stage { position: static; height: auto; }
  .scroll-hero video { display: none; }
  .scroll-hero .fallback-still { display: block; }
}
```

## Gotchas

- FAL_KEY env var is required for every Kling/fal call. If it isn't set, stop and ask the user to set it (https://fal.ai/dashboard/keys) before retrying — never silently fall back to a different model.
- Never hard-code FAL_KEY or commit it. Read from process.env.FAL_KEY only; treat it like any other API secret.
- Heavy dark radial overlays make product media look muddy — use the lightest mask that preserves readability, and remove overlays entirely when inspecting the video.
- fal/Kling rejects images below its minimum dimensions; pad small or oddly-shaped stills onto a 1280x720 or 1024x1024 canvas before upload.
- Scroll-driven heroes must not autoplay or loop — pause the video and set currentTime from scroll progress.
- When using start_image_url + end_image_url, both images must have identical dimensions and aspect ratio.
- Test through a local HTTP server, not file://, when the site uses video, local APIs, or non-default MIME types.
- If the user asks to remove text, remove the DOM elements and JS references — don't just opacity:0 them.
- Match asset background to page background; otherwise strengthen top/bottom/side masks until no dividing band is visible.

---
Generated by SkillMake from https://fal.ai/models/fal-ai/kling-video on 2026-05-07T20:57:38.203Z.
Verify against source before relying on details.