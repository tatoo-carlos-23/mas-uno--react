import { UButton } from "@components/button/UButton";
import start from "@img/star-logo.png";
import "./detail-tecnology.scss";
import {
  IListTecnology,
  ITecnologySelected,
} from "../../interfaces/list-tecnologies.interface";
import { useEffect, useState } from "react";

export const DetailTecnology = (props: ITecnologySelected) => {
   
  const [tecnology, setTecnology] = useState<IListTecnology>();

  useEffect(() => {
    if (props.activeId) {
      const search = props.list.find((r) => r.id === props.activeId);
      if (search) setTecnology(search);
    }
  }, [props.activeId, props.list]);

  const changeItem = (id: number) => {
    if (props?.changeItem) {
      props.changeItem(id);
    }
  };

  if (tecnology) {
    return (
      <div className="detail-tecnology">
        <img src={start} alt="star-logo" />
        <span className="detail-tecnology__tecnology">
          {tecnology.nameTecnology}
        </span>
        <div className="detail-tecnology__description">
          {tecnology.description}
        </div>
        <UButton
          label="Ver tecnología"
          width="240px"
          changeButton={() => console.warn("")}
        />
        <div className="detail-tecnology__items">
          {props.list.map((res, index) => (
            <div
              onClick={() => changeItem(res.id)}
              key={index + 1}
              style={{
                backgroundColor:
                  res.id === props.activeId ? "var(--mu-color-primary)" : "#E3E3E3",
              }}
              className="detail-tecnology__items__item"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  return <div>No se encontro</div>;
};
