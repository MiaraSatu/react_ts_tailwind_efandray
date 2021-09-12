import { createContext } from "react";
import connectedInterface from "./connected-interface";

const connectedContext = createContext<connectedInterface | null> (null);

export default connectedContext;