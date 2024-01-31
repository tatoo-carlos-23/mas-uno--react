import { useEffect, useState } from "react";
import { IUCaptchaProps } from "./UCaptchaModel";
import imgCaptcha from "@img/captcha01.png";
import "./u-captcha.scss";

export const UCaptcha = (props: IUCaptchaProps) => {
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
    <div className="u-captcha">
      <span className={_classLabel(props.required)}>{props.label} *</span>
      <input
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        className={_classInput(isFocus)}
        onInput={(ev) => changeValue((ev.target as any)?.value as string)}
        type="text"
        value={value}
        placeholder={props.placeholder}
      />
      {isFocus && (
        <div className="u-captcha__captcha">
          <img src={imgCaptcha} height={50} alt="captcha01" />
          <div className="u-captcha__captcha__btn-reload">
            <span
              style={{ color: "#ffffff" }}
              className="material-symbols-outlined"
            >
              refresh
            </span>
          </div>
        </div>
      )}
      {isFocus && <div className="u-captcha__captcha__triangle"></div>}
    </div>
  );
};

const _classLabel = (required?: boolean): string => {
  return [
    "u-captcha__label",
    required ? "u-captcha__label__required" : "u-captcha__label__no_required",
  ].join(" ");
};

const _classInput = (isFocus: boolean): string => {
  return ["u-captcha__input", isFocus ? "u-captcha__input__active" : ""].join(
    " "
  );
};
