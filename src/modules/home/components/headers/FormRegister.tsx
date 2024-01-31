import { UInput } from "@components/input/UInput";
import { USelect } from "@components/select/USelect";
import { UCaptcha } from "@components/captcha/UCaptcha";

import "./form-register.scss";
import cyberDay from "@img/cyber-days-sello-empresa-certificada-2022.png";
import completeInfo from "@img/undelined-complete-info.png";
import { useState } from "react";
import { IUser } from "../../interfaces/user.interface";
import { UCheckBox } from "@components/checkbox/UCheckBox";
import { UButton } from "@components/button/UButton";

const FormRegister = () => {
  const [form, setForm] = useState<IUser>({
    name: "",
    lastNames: "",
    phone: "",
    email: "",
  });

  const isDisabledButton = (): boolean => {
    return (
      form.name.length === 0 ||
      form.lastNames.length === 0 ||
      form.phone.length === 0 ||
      form.email.length === 0
    );
  };

  return (
    <div className="form-register">
      <img
        className="form-register__cyber-days-sello"
        src={cyberDay}
        alt="Cyber-Days-Sello-Empresa-Certificada-2022"
      />

      <div className="form-register__complete-info">
        Completa tus datos
        <img
          className="form-register__complete-info__img"
          src={completeInfo}
          alt="undelined-complete-info"
        />
      </div>

      <div className="form-register__group-input">
        <div>
          <UInput
            label="Nombres"
            required
            value={form?.name || ""}
            placeholder="Ingrese sus nombres"
            changeValue={(ev) => setForm({ ...form, name: ev })}
          />
        </div>
        <div>
          <UInput
            label="Apellidos"
            required
            value={form?.lastNames || ""}
            placeholder="Ingrese sus apellidos"
            changeValue={(ev) => setForm({ ...form, lastNames: ev })}
          />
        </div>
      </div>

      <div className="form-register__group-input">
        <div>
          <UInput
            label="Teléfono celular"
            required
            value={form?.phone || ""}
            placeholder="Ingrese su número telefonico"
            changeValue={(ev) => setForm({ ...form, phone: ev })}
          />
        </div>
        <div>
          <UInput
            label="Correo electrónico"
            required
            value={form?.email || ""}
            placeholder="Ingrese su correo electrónico"
            changeValue={(ev) => setForm({ ...form, email: ev })}
          />
        </div>
      </div>
      <div className="form-register__group-input">
        <div>
          <USelect
            label="Tus favoritos"
            value="Pollo, Cerdo, Embutidos..."
            changeValue={() => console.warn()}
          />
        </div>
        <div>
          <UCaptcha
            label="Complete captcha"
            value=""
            changeValue={() => console.warn()}
          />
        </div>
      </div>
      <div className="form-register__checkbox" style={{ marginTop: "40px" }}>
        <UCheckBox
          value={false}
          changeValue={(val) => console.warn("Result: " + val)}
        />
        <span>Acepto los</span>
        <span className="form-register__checkbox__resalt">
          Términos y políticas de privacidad
        </span>
      </div>
      <div className="form-register__checkbox">
        <UCheckBox
          value={true}
          changeValue={(val) => console.warn("Result: " + val)}
        />
        <span>Acepto el</span>
        <span className="form-register__checkbox__resalt">
          Uso de datos personales
        </span>
      </div>
      <div className="form-register__btn-register">
        <UButton
          label="Registrarme"
          changeButton={() => {
            console.warn("Click en registrarme...");
          }}
          width="240px"
          disabled={!!isDisabledButton()}
        />
      </div>
      <div className="form-register__message">
        Aprovecha las mejores ofertas y descuentos en cerdo, congelados,
        embutidos <span>y mucho más</span>. No te pierdas de nada estos Cyberdays
        registrándote y obteniendo grandes descuentos exclusivos.
      </div>
    </div>
  );
};

export default FormRegister;
