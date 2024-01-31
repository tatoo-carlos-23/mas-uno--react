import checked from "@img/checked.png";
import unchecked from "@img/unchecked.png";
import { useEffect, useState } from "react";
import { IUCheckedProps } from "./UCheckBoxModel";

export const UCheckBox = (props: IUCheckedProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    setIsActive(props.value);
  }, [props.value]);

  const changeValue = (val: boolean) => {
    setIsActive(val);
    props.changeValue(val);
  };

  return (
    <img
      style={{ cursor: "pointer" }}
      onClick={() => changeValue(!isActive)}
      src={isActive ? checked : unchecked}
      alt="checked----or----unchecked"
    />
  );
};
