import cssClasses from './Text.module.css';

const Text = ({ children, color, size, title, justify, lineThrough }) => (
  <div
    className={cssClasses.text}
    style={{
      color,
      fontSize: `${title ? '36' : size}px`,
      textAlign: justify,
      textDecoration: lineThrough ? 'line-through' : '',
    }}
  >
    {children}
  </div>
);

export default Text;
