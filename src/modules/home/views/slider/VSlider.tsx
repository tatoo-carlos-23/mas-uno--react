import { useState } from "react";
import { DetailTecnology } from "../../components/slider/DetailTecnology";
import { listTecnologies } from "../../helpers/mock-list-tecnology.helper";
import { ITecnologySelected } from "../../interfaces/list-tecnologies.interface";
import imgLeft from "@img/left.png";
import imgRight from "@img/right.png";
import "./slider.scss";

export const VSlider = () => {
  const [img, setImg] = useState<string>(listTecnologies[0].img);
  const [tecnology, setTecnology] = useState<ITecnologySelected>({
    list: listTecnologies,
    activeId: listTecnologies[0].id,
  });

  const isShowBtnLeft = (): boolean => {
    const index = listTecnologies.findIndex((r) => r.id === tecnology.activeId);
    return index > 0;
  };

  const changeBtnLeft = () => {
    const index = listTecnologies.findIndex((r) => r.id === tecnology.activeId);
    const search = listTecnologies[index - 1];
    changeItem(search.id);
  };

  const isShowBtnRight = (): boolean => {
    const index = listTecnologies.findIndex((r) => r.id === tecnology.activeId);
    const count = listTecnologies.length - 1;
    return index !== count;
  };

  const changeBtnRight = () => {
    const index = listTecnologies.findIndex((r) => r.id === tecnology.activeId);
    const search = listTecnologies[index + 1];
    changeItem(search.id);
  };

  const changeItem = (id: number) => {
    const search = listTecnologies.find((r) => r.id === id);
    if (search) {
      setImg(search.img);
      setTecnology({
        list: listTecnologies,
        activeId: search.id,
      });
    }
  };

  if (tecnology && img) {
    return (
      <div className="slider">
        <DetailTecnology
          list={tecnology.list}
          activeId={tecnology.activeId}
          changeItem={(res) => changeItem(res)}
        />
        <img src={img} alt={"img-tecnology-" + tecnology.activeId} />
        {isShowBtnLeft() && (
          <img
            className="slider__btn-left btn-navigation"
            src={imgLeft}
            alt="left"
            onClick={() => changeBtnLeft()}
          />
        )}
        {isShowBtnRight() && (
          <img
            className="slider__btn-right btn-navigation"
            src={imgRight}
            alt="right"
            onClick={() => changeBtnRight()}
          />
        )}
      </div>
    );
  }

  return <div>Cargando</div>;
};
