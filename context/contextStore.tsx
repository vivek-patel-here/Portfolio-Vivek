"use client"
import { createContext, useRef } from "react";
import { contextIf } from "@/interface/contextif";


interface propIf {
    children: React.ReactNode;
}

const StoreContext = createContext<contextIf | null>(null);

export function StoreProvider({ children }: propIf): React.ReactNode {
    const homeRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const skillRef = useRef<HTMLDivElement | null>(null);
    const projectRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);

    const scrollHandler = (ref: React.RefObject<HTMLDivElement | null>) => {

        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (<StoreContext.Provider value={{ homeRef, aboutRef, skillRef, projectRef, contactRef, scrollHandler }}>{children}</StoreContext.Provider>)
}



export default StoreContext;