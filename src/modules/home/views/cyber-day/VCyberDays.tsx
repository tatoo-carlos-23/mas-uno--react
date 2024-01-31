import { USeparatorCircle } from "@components/separator-circle/USeparatorCircle";
import { UCircleDescriptionStep } from "@components/circle-description-step/UCircleDescriptionStep";
import underline from "@img/underline-register-get.png";
import "./cyber-day.scss";
import { listSteps } from "../../helpers/mock-list-step.helper";

export const VCyberDays = () => {
  return (
    <div className="cyber-days">
      <div className="cyber-days__separator-first">
        <USeparatorCircle />
      </div>
      <div className="cyber-days__question">
        ¿Como obtengo el descuento por Cyber Days?
        <img src={underline} alt="" />
      </div>
      <div className="cyber-days__description">
        Para adquirir nuestro descuento especial por <span>Cyber Days</span>{" "}
        sigue los siguientes pasos
      </div>
      <div className="cyber-days__steps">
        {listSteps.map((res) => (
          <UCircleDescriptionStep
            step={res.step}
            title={res.title}
            description={res.description}
          />
        ))}
      </div>
      <div className="cyber-days__separator-first">
        <USeparatorCircle />
      </div>
    </div>
  );
};
