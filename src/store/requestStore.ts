import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import { RootStore } from ".";
import {
  getProcessing,
  getRequest,
  getRequests,
  getRequestStatus,
} from "../api";
import { IListItemData, IRequest } from "../interface/requests";
import formatDDMMYYYY from "../utils/dateFormater";
import StatusEnum from "../constants/statuses";

class RequestStore {
  root: RootStore;

  requests: IRequest[] = [];

  currentRequest = {} as IRequest;

  currentRequestStatus = StatusEnum.void;

  processing: { isProcessing: boolean; id: string | number | null } = {
    isProcessing: false,
    id: null,
  };

  errors: string[] = [];

  constructor(root: RootStore) {
    this.root = root;
    makeObservable(this, {
      root: observable,
      requests: observable,
      currentRequest: observable,
      currentRequestStatus: observable,
      processing: observable,
      errors: observable,
      getCurrentRequest: action.bound,
      getRequests: action.bound,
      getRequestStatus: action.bound,
      getListItemData: computed,
      resetCurrentRequest: action.bound,
      resetCurrentRequestStatus: action.bound,
      getProcessing: action.bound,
    });
  }

  getRequests = async () => {
    try {
      const data = await getRequests();
      runInAction(() => {
        this.requests = data;
      });
    } catch (e) {
      runInAction(() => {
        this.errors = [...this.errors, `${e.code} ${e.message}`];
      });
    }
  };

  getCurrentRequest = async (id: string | number) => {
    const data = await getRequest(id);
    try {
      runInAction(() => {
        this.currentRequest = data;
      });
    } catch (e) {
      runInAction(() => {
        this.errors = [...this.errors, `${e.code} ${e.message}`];
      });
    }
  };

  getRequestStatus = async (id: string | number) => {
    try {
      const data = await getRequestStatus(id);
      runInAction(() => {
        this.currentRequestStatus = data;
      });
    } catch (e) {
      runInAction(() => {
        this.errors = [...this.errors, `${e.code} ${e.message}`];
      });
    }
  };

  getProcessing = async () => {
    try {
      const data = await getProcessing();
      runInAction(() => {
        this.processing.isProcessing = data.processing;
        this.processing.id = data.id;
      });
    } catch (e) {
      runInAction(() => {
        this.errors = [...this.errors, `${e.code} ${e.message}`];
      });
    }
  };

  resetCurrentRequest = () => {
    this.currentRequest = {} as IRequest;
  };

  resetCurrentRequestStatus = () => {
    this.currentRequestStatus = StatusEnum.void;
  };

  get getListItemData() {
    return this.requests?.map((r) => {
      const { status, auto, createDate, id } = r;
      let formattedStatus;
      switch (status.code) {
        case "DRAFT":
          formattedStatus = "Черновик";
          break;
        case "PROCESSING":
          formattedStatus = "В обработке";
          break;
        case "SUCCESS":
          formattedStatus = "Успех";
          break;
        default:
          formattedStatus = StatusEnum.void;
      }
      return {
        id,
        carModel: auto.model.name,
        carBrand: auto.brand,
        data: formatDDMMYYYY(createDate),
        formattedStatus,
        status: status.code,
      } as IListItemData;
    });
  }
}

export default RequestStore;
