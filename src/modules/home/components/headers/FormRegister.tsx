import { UInput } from "@components/input/UInput";
import "./form-register.scss";
import cyberDay from "@img/cyber-days-sello-empresa-certificada-2022.png";

const FormRegister = () => {
  return (
    <div className="form-register" style={{ padding: "20px" }}>
      <img
        className="form-register__cyber-days-sello"
        src={cyberDay}
        alt="Cyber-Days-Sello-Empresa-Certificada-2022"
      />
      <UInput
        label="Nombres"
        required
        value=""
        changeValue={(ev) => console.warn("ChangeValue: " + ev)}
      />
    </div>
  );
};

export default FormRegister;
