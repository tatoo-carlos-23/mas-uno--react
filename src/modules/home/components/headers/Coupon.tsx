import logo from "@img/logo-img-circle-coupon.png";
import undelineRed from "@img/underlined-red.png";
import undelineRegisterGet from "@img/underline-register-get.png";
import scissors from "@img/scissors.png";
import percentage from "@img/10percentage.png";
import "./coupon.scss";

const Coupon = () => {
  return (
    <div className="coupon">
      <div className="coupon__header">
        <img src={logo} alt="logo-img-circle-coupon" />
        <span>ES HORA DE</span>
      </div>
      <span className="coupon__subtitle">CYBER DAYS</span>
      <div className="coupon__mas_uno">
        <div>EN</div>
        <div>Más uno</div>
        <img src={undelineRed} alt="underlined-red" />
      </div>
      <div className="coupon__range_date">Del 28 al 30 de marzo</div>
      <div className="coupon__card">
        <div className="coupon__card__border">
          <div className="coupon__card__border__title">Regístrate y obtén</div>
          <img
            className="underline"
            src={undelineRegisterGet}
            alt="underline-register-get"
          />
          <div className="coupon__card__border__discount">
            <img src={percentage} alt="10percentage" />
            <div className="description">
              <span className="description__first">En tu primera</span>
              <span className="description__first">compra de</span>
              <span className="description__cyber">CYBER DAYS</span>
            </div>
          </div>
          <div className="coupon__card__border__description">
            <div>
              Aplicamos el descuento mediante un código que se te eviará a tu
              correo registrado.
            </div>
            <div>Cupón válido del 28 al 30 de marzo.</div>
            <div>*Aplican términos y condiciones</div>
          </div>
        </div>
        <img className="scissors" src={scissors} alt="scissors" />
      </div>
    </div>
  );
};

export default Coupon;
