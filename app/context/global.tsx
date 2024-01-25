"use client";


import { tProduct } from "@/type/tproduct";
import { tGlobalContext } from "@/type/context/globalContext";
import React, { createContext, useContext, ReactNode, Component, Dispatch, SetStateAction } from "react";


const GlobalContext = createContext<tGlobalContext | undefined>(undefined);

export class GlobalContextProvider extends Component<{ children: ReactNode }, {
    idTemp: number;
    product: tProduct[] | null;
}> {
    state: {
        idTemp: number;
        product: tProduct[] | null
    } = {
            idTemp: 99,
            product: null
        }

    setIdTemp: Dispatch<SetStateAction<number>> = (value) => {
        // if value is a function, use it to compute th new state
        this.setState((prevState) => ({
            idTemp: typeof value === 'function' ? (value as (prevState: number) => number)(prevState.idTemp) : value,
        }));
    };

    setProduct: Dispatch<SetStateAction<tProduct[] | null>> = (value) => {
        this.setState((prevState) => ({
            product: typeof value === 'function' ? (value as (prevState: tProduct[] | null) => tProduct[] | null)(prevState.product) : value,
        }))
    };



    render() {
        const { children } = this.props;
        const { idTemp } = this.state;
        const { product } = this.state;
        const { setIdTemp } = this;
        const { setProduct } = this;

        return (
            <GlobalContext.Provider value={{
                idTemp,
                product,
                setIdTemp,
                setProduct,
            }}>
                {children}
            </GlobalContext.Provider>
        )
    }
}

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalContextProvider");
    }
    return context
}