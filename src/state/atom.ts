import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";

export const listaDeEventosState = atom<IEvento[]>({
    key: 'listaDeEventosState',
    default: [
        {
            "descricao": "Lohuama Lima",
            "inicio": new Date("2024-04-23T09:00"),
            "fim": new Date("2024-04-23T10:00"),
            "completo": false,
            "id": 1642342747,
        },
        {
            "descricao": "Fernanda Lira",
            "inicio": new Date("2024-04-23T11:00"),
            "fim": new Date("2024-04-23T12:00"),
            "completo": false,
            "id": 1642342959,
        },
    ]
});
