export interface contextIf{
    homeRef:React.RefObject<HTMLDivElement|null>;
    aboutRef:React.RefObject<HTMLDivElement|null>;
    skillRef:React.RefObject<HTMLDivElement|null>;
    projectRef:React.RefObject<HTMLDivElement|null>;
    contactRef:React.RefObject<HTMLDivElement|null>;
    scrollHandler:(ref:React.RefObject<HTMLDivElement|null>)=>void;
} 