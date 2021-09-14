import { createContext, MouseEvent } from "react";
import discoInterface from "./disco-interface";

const disconnectedContext = createContext<discoInterface | null> (null);

export default disconnectedContext;