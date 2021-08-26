import { useContext } from "react";

import { StoreContext } from "../App";

export const useStore = () => useContext(StoreContext);