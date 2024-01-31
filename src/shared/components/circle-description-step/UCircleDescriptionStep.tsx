import step1 from "@img/step-1-register.png";
import step2 from "@img/step-2-coupon.png";
import step3 from "@img/step-3-phone.png";
import "./circle-description-step.scss";
import { IUCircleDescriptionStepProps } from "./UCircleDesStepModel";

export const UCircleDescriptionStep = (props: IUCircleDescriptionStepProps) => {
  const imgStep = (step: number) => {
    if (step === 1) return step1;
    if (step === 2) return step2;
    if (step === 3) return step3;
    return step1;
  };

  return (
    <div className="u-circle-desstep">
      <span className="u-circle-desstep__step">Paso {props.step}</span>
      <div className="u-circle-desstep__logo">
        <img src={imgStep(props.step)} alt="step-2-**" />
      </div>
      <span className="u-circle-desstep__step">{props.title}</span>
      <span className="u-circle-desstep__description">{props.description}</span>
    </div>
  );
};
