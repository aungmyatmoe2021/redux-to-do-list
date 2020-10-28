import cssClasses from './Card.module.css';

const Card = ({ children, minWidth, maxHeight }) => (
  <div
    className={cssClasses.card}
    style={{ minWidth: `${minWidth}px`, maxHeight }}
  >
    {children}
  </div>
);

export default Card;
