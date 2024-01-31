export interface IListTecnology {
    id: number;
    nameTecnology: string;
    description: string;
    img: string;
}

export interface ITecnologySelected {
    list: IListTecnology[];
    activeId: number;
    changeItem?: (item: number) => void
}