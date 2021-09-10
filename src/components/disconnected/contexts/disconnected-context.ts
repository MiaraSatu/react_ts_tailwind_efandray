import { createContext } from "react";
import disconnectedInterface from "./desconnected-interface"

const disconnectedContext = createContext<disconnectedInterface | null>(null);

export default disconnectedContext;