import { createContext } from "react";
import { Item } from "../types/Item";

type AppContextType = {
  items: Item[],
  setItems: (items: Array<Item>) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export default AppContext;
