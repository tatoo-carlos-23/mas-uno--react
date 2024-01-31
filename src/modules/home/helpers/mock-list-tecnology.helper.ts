import { IListTecnology } from "../interfaces/list-tecnologies.interface";
import imgPhp from "@img/img-link-php.png"
import imgFlutter from "@img/img-link-flutter.png"
import imgDesing from "@img/img-link-uiux.png"

const descriptionDefault = "Lorem ipsum dolor sit amet consectetur. Cursus cursus erat massa vel id nunc. Ultricies dui pharetra laoreet laoreet laoreet habitasse iaculis lobortis. Amet diam dolor tincidunt congue sagittis in."

export const listTecnologies: IListTecnology[] = [
    {
        id: 1,
        nameTecnology: "PHP",
        description: descriptionDefault,
        img: imgPhp
    },
    {
        id: 2,
        nameTecnology: "Flutter",
        description: descriptionDefault,
        img: imgFlutter
    },
    {
        id: 3,
        nameTecnology: "Diseño UX/UI",
        description: descriptionDefault,
        img: imgDesing
    },
]