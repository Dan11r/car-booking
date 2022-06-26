import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import { RootStore } from ".";
import { postRegistration, postRequest, putRequest } from "../api";
import { IOption } from "../components/pages/DraftPage/RegistrationCarForm/Select/interface";
import {
  IRegistrationCarForm,
  IRegistrationCarFormWithId,
} from "../interface/requests";

class RequestFormStore {
  root: RootStore;

  selectedBrand = "";

  errors: string[] = [];

  constructor(root: RootStore) {
    this.root = root;
    makeObservable(this, {
      root: observable,
      selectedBrand: observable,
      errors: observable,
      setSelectedBrand: action.bound,
      postRequest: action.bound,
      putRequest: action.bound,
      postRegistration: action.bound,
      carBrandSelectOptions: computed,
      carModelSelectOptions: computed,
      citiesSelectOptions: computed,
      getRequestFormData: computed,
    });
  }

  setSelectedBrand(brand: string) {
    this.selectedBrand = brand;
  }

  postRequest = async (body: IRegistrationCarForm) => {
    try {
      await postRequest(body);
      this.root.requestStore.getRequests();
    } catch (e) {
      runInAction(() => {
        this.errors = [...this.errors, `${e.code} ${e.message}`];
      });
    }
  };

  putRequest = async (body: IRegistrationCarFormWithId) => {
    try {
      await putRequest(body);
      this.root.requestStore.getRequests();
    } catch (e) {
      runInAction(() => {
        this.errors = [...this.errors, `${e.code} ${e.message}`];
      });
    }
  };

  postRegistration = async (
    body: IRegistrationCarFormWithId | IRegistrationCarForm,
  ) => {
    try {
      await postRegistration(body);
      this.root.requestStore.getRequests();
    } catch (e) {
      runInAction(() => {
        this.errors = [...this.errors, `${e.code} ${e.message}`];
      });
    }
  };

  get getRequestFormData() {
    const { currentRequest } = this.root.requestStore;
    return {
      carBrand: currentRequest?.auto?.brand || "",
      cityCode: currentRequest?.city?.code || "",
      driverLicense: currentRequest?.person?.driverLicense || "",
      email: currentRequest?.person?.email || "",
      firstName: currentRequest?.person?.firstName || "",
      lastName: currentRequest?.person?.lastName || "",
      modelId: currentRequest?.auto?.model?.id || "",
      secondName: currentRequest?.person?.secondName || "",
    } as IRegistrationCarForm;
  }

  get carBrandSelectOptions() {
    return (
      this.root.dictionaryStore.dictionaries.DICT_AUTO?.map((i) => ({
        label: Object.keys(i)[0],
        value: Object.keys(i)[0],
      })) || [{ value: "", label: "" }]
    );
  }

  get carModelSelectOptions() {
    let result: IOption[] = [{ value: "", label: "" }];
    this.root.dictionaryStore.dictionaries.DICT_AUTO?.forEach((item) => {
      if (item[this.selectedBrand]) {
        result = item[this.selectedBrand].map((model) => ({
          label: model.name,
          value: model.id,
        }));
      }
    });
    return result;
  }

  get citiesSelectOptions() {
    return (
      this.root.dictionaryStore.dictionaries.DICT_CITIES?.map((c) => ({
        label: c.name,
        value: c.code,
      })) || [{ value: "", label: "" }]
    );
  }
}

export default RequestFormStore;
