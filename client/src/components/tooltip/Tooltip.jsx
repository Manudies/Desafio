import './tooltip.css';

const Tooltip = ({ text }) => {
  return (
    <div className="tooltip">
      ?
      <span className="tooltiptext">{text}</span>
    </div>
  );
};

export default Tooltip;
