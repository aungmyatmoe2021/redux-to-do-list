import cssClasses from './Flex.module.css';

const Flex = ({
  children,
  direction,
  flex,
  basis,
  align,
  justify,
  padding,
  height,
  style,
}) => (
  <div
    className={cssClasses.flex}
    style={{
      flexDirection: direction,
      flex,
      basis: `${basis}px`,
      alignItems: align,
      justifyContent: justify,
      padding,
      height,
      ...style,
    }}
  >
    {children}
  </div>
);

export default Flex;
