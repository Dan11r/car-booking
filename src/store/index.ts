import { injectStores } from "@mobx-devtools/tools";
import RequestStore from "./requestStore";
import DictionaryStore from "./dictionaryStore";
import RequestFormStore from "./requestFormStore";

export class RootStore {
  requestStore;

  dictionaryStore;

  requestFormStore;

  constructor() {
    this.requestStore = new RequestStore(this);
    this.dictionaryStore = new DictionaryStore(this);
    this.requestFormStore = new RequestFormStore(this);
  }
}

const rootStore = new RootStore();

injectStores({
  rootStore,
});

export { rootStore };
