import { useState } from "react";
import { IUSelectProps } from "./USelectModel";
import "./u-select.scss";
import dropdown from "@svg/desplegable.svg";

export const USelect = (props: IUSelectProps) => {
  const [isFocus, setOnFocus] = useState<boolean>(false);
  return (
    <div className="u-select">
      <span className={_classLabel(props.required)}>{props.label} *</span>
      <div
        tabIndex={0}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        className={_classInput(isFocus)}
      >
        {props.value}
        <img className="u-select__dropdown" src={dropdown} alt="desplegable" />
      </div>
    </div>
  );
};

const _classLabel = (required?: boolean): string => {
  return [
    "u-select__label",
    required ? "u-select__label__required" : "u-select__label__no_required",
  ].join(" ");
};

const _classInput = (isFocus: boolean): string => {
  return ["u-select__select", isFocus ? "u-select__select__active" : ""].join(
    " "
  );
};
