import {PersistStorage, recoilPersist} from "recoil-persist";
import IndexDBStorage from "./IndexDB";

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
});

export {persistAtom};