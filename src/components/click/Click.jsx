import cssClasses from './Click.module.css';

const Click = ({ children, click }) => (
  <div className={cssClasses.click} onClick={click}>
    {children}
  </div>
);

export default Click;
