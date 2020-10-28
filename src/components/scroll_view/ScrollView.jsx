import cssClasses from './ScrollView.module.css';

const ScrollView = ({ children, height }) => (
  <div className={cssClasses.scrollview} style={{ height }}>
    {children}
  </div>
);

export default ScrollView;
