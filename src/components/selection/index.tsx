import { Option } from "@/models/option";
import "./index.scss";

const Selection = (props: {
  option: Option;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}) => {
  var className = "selection ";
  if (props.className) {
    className += props.className;
  }
  if (props.disabled) {
    className += " disabled";
  }
  return (
    <button onClick={props.onClick} className={className}>
      {props.option.text}
    </button>
  );
};

export default Selection;
