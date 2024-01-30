import logoMasUno from "@img/logo-mas-uno.png";
import "./header.scss";
import Coupon from "../../components/headers/Coupon";
import FormRegister from "../../components/headers/FormRegister";

export const VHeader = () => {
  return (
    <div className="v-header">
      <div className="v-header__logo">
        <img src={logoMasUno} alt="logo-mas-uno" />
      </div>
      <div className="v-header__container">
        <Coupon />
        <FormRegister />
      </div>
    </div>
  );
};
