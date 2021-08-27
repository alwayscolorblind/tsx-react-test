import Store from "@stores/store";

import {createContext} from "react";

const store = new Store()

export const StoreContext = createContext(store);