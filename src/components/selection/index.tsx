import { Option } from "@/models/option";
import "./index.scss";
import { useTranslation } from "react-i18next";
const Selection = (props: {
  option: Option;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}) => {
  const { t } = useTranslation();
  var className = "selection ";
  if (props.className) {
    className += props.className;
  }
  if (props.disabled) {
    className += " disabled";
  }
  return (
    <button onClick={props.onClick} className={className}>
      {t(`selection.${props.option.text}`)}
    </button>
  );
};

export default Selection;
