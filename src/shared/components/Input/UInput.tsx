import { useEffect, useState } from "react";
import { IUInputProps } from "./UInputModel";
import "./u-input.scss";

export const UInput = (props: IUInputProps) => {
  const [isFocus, setOnFocus] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (props.value) {
      setValue(props.value);
    }
  }, [props.value]);

  const changeValue = (val: string) => {
    setValue(val);
    if (!props.disabled) {
      props.changeValue(val);
    }
  };

  return (
    <div className="u-input">
      <span className={_classLabel(props.required)}>Hola *</span>
      <input
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        className={_classInput(isFocus)}
        onInput={(ev) => changeValue((ev.target as any)?.value as string)}
        type="text"
        value={value}
        placeholder="Placeholdfer"
      />
    </div>
  );
};

const _classLabel = (required?: boolean): string => {
  return [
    "u-input__label",
    required ? "u-input__label__required" : "u-input__label__no_required",
  ].join(" ");
};

const _classInput = (isFocus: boolean): string => {
  return ["u-input__input", isFocus ? "u-input__input__active" : ""].join(" ");
};
