import { Dispatch, SetStateAction } from "react";
import { tProduct } from "../tproduct";


export type tGlobalContext = {
	idTemp: number;
    product: tProduct[] | null;
    setIdTemp: Dispatch<SetStateAction<number>>;
    setProduct: Dispatch<SetStateAction<tProduct[] | null>>;
};