import cssClasses from './Container.module.css';

const Container = ({ color, children }) => (
  <div className={cssClasses.container} style={{ backgroundColor: color }}>
    {children}
  </div>
);

export default Container;
