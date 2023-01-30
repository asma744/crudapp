import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export default function Wrapper({ children }){
    return <GlobalContext.Provider>{ children }</GlobalContext.Provider>;
}