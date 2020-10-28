import cssClasses from './Center.module.css';

const Center = props => (
  <div className={cssClasses.center}>
    <div>{props.children}</div>
  </div>
);

export default Center;
