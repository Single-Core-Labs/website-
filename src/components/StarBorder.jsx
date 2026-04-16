import './StarBorder.css';

const StarBorder = ({
  as: Component = 'button',
  className = '',
  children,
  ...rest
}) => {
  return (
    <Component
      className={`star-border-container ${className}`}
      {...rest}
    >
      <div className="border-gradient-bottom"></div>
      <div className="border-gradient-top"></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;