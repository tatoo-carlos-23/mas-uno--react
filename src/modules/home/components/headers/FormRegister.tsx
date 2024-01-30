import "./form-register.scss";
import cyberDay from "@img/cyber-days-sello-empresa-certificada-2022.png";

const FormRegister = () => {
  return (
    <div className="form-register">
      <img className="form-register__cyber-days-sello" src={cyberDay} alt="Cyber-Days-Sello-Empresa-Certificada-2022" />
    </div>
  );
};

export default FormRegister;
