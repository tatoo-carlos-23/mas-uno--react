import "./footer.scss";
import book from "@img/libroreclamaciones.png";
import logomasuno from "@img/logo-mas-uno.png";
import phonelogo from "@svg/phone-logo.svg";
import facebook from "@img/facebook.png";
import twiter from "@img/twiter.png";
import linkedin from "@img/linkedin.png";

export const VFooter = () => {
  return (
    <div className="footer">
      <div className="footer__frc-1">
        <div className="footer__frc-1__logo">
          <img src={logomasuno} alt="logo-mas-uno" />
          <span>Nosotros</span>
          <span>Somos Mas uno</span>
        </div>
        <div className="footer__frc-1__information">
          <div className="text-info">
            <span>Te informamos</span>
            <span>Preguntas frecuentes</span>
            <span>Términos y condiciones</span>
            <span>Medios de pago</span>
            <span>Políticas de entrega</span>
            <span>Libro de reclamaciones</span>
          </div>
          <div className="img-book">
            <img src={book} alt="libroreclamaciones" />
          </div>
        </div>
      </div>
      <div className="footer__frc-2">
        <span className="footer__frc-2__contact">Contáctanos</span>
        <div className="footer__frc-2__phone">
          <img src={phonelogo} alt="phone-logo" />
          <span>00000-0000</span>
        </div>
        <div className="footer__frc-2__net">
          <img width={44} height={44} src={facebook} alt="facebook" />
          <img width={44} height={44} src={twiter} alt="twiter" />
          <img width={44} height={44} src={linkedin} alt="linkedin" />
        </div>
        <span className="footer__frc-2__lima">© 2022 Mas uno Lima - Perú</span>
      </div>
    </div>
  );
};
