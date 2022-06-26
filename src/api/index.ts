import axios from "axios";
import { TDictionaryId } from "../constants/dictionaries";
import Routes from "../constants/urls";
import {
  IRegistrationCarForm,
  IRegistrationCarFormWithId,
} from "../interface/requests";

const returnData = (res: any) => res.data;

const axiosRequest = axios.create({
  baseURL: "/reg_service/api/v1/",
});

export const getRequests = () => {
  return axiosRequest.get(Routes.requests).then(returnData);
};
export const getRequest = (id: string | number) => {
  return axiosRequest.get(Routes.request + id).then(returnData);
};
export const getDictionary = (id: TDictionaryId) => {
  return axiosRequest.get(Routes.dictionary + id).then(returnData);
};
export const getProcessing = () => {
  return axiosRequest.get(Routes.processing).then(returnData);
};
export const getRequestStatus = (id: string | number) => {
  return axiosRequest.get(Routes.requestStatus + id).then(returnData);
};
export const postRequest = (body: IRegistrationCarForm) => {
  return axiosRequest.post(Routes.request, body).then(returnData);
};
export const postRegistration = (
  body: IRegistrationCarFormWithId | IRegistrationCarForm,
) => {
  return axiosRequest.post(Routes.registration, body).then(returnData);
};
export const putRequest = (body: IRegistrationCarFormWithId) => {
  return axiosRequest.put(Routes.request, body).then(returnData);
};
