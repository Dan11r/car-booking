import { action, makeObservable, observable, runInAction } from "mobx";
import { getDictionary } from "../api";
import { TDictionaryId } from "../constants/dictionaries";
import { IDictionaries } from "../interface/requests";
import { RootStore } from "./index";

class DictionaryStore {
  root: RootStore;

  dictionaries: IDictionaries = {};

  errors: string[] = [];

  constructor(root: RootStore) {
    this.root = root;
    makeObservable(this, {
      root: observable,
      errors: observable,
      dictionaries: observable,
      getDictionary: action,
    });
  }

  getDictionary = async (id: TDictionaryId) => {
    try {
      const data = await getDictionary(id);
      runInAction(() => {
        this.dictionaries = { ...this.dictionaries, [id]: data };
      });
    } catch (e) {
      runInAction(() => {
        this.errors = [...this.errors, `${e.code} ${e.message}`];
      });
    }
  };
}
export default DictionaryStore;
