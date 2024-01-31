import { IUButtonProps } from "./UButtonModel";
import "./u-button.scss";

export const UButton = (props: IUButtonProps) => {
  /**
   * Metodo para emitir click
   * @description Solo hara click cuando la propiedad disabled sea diferente de true
   */
  const changeButton = () => {
    if (!props.disabled) {
      props.changeButton();
    }
  };

  return (
    <button
      style={{ width: props.width ? props.width : "100%" }}
      className={_class(props.disabled)}
      onClick={() => changeButton()}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
};

const _class = (disabled?: boolean): string => {
  return [
    "u-button",
    disabled ? "u-button__disabled" : "u-button__enabled",
  ].join(" ");
};
