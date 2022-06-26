export interface IRegistrationCarForm {
  firstName: string;
  lastName: string;
  secondName: string;
  email: string;
  driverLicense: string;
  cityCode: string;
  carBrand: string;
  modelId: number;
}

export interface IRegistrationCarFormWithId extends IRegistrationCarForm {
  id: string | number;
}

export interface IDictionaries {
  DICT_AUTO?: IAutoDictionaryItem[];
  DICT_CITIES?: ICitiesDictionaryItem[];
}

interface IModel {
  id: number;
  name: string;
}

interface IAutoDictionaryItem {
  [key: string]: IModel[];
}

interface ICitiesDictionaryItem extends ICity {}

interface ICity {
  code: string;
  name: string;
}

export interface IRequest {
  id: string | number;
  status: {
    code: string;
  };
  person: Pick<
    IRegistrationCarForm,
    "firstName" | "lastName" | "secondName" | "email" | "driverLicense"
  >;
  auto: {
    brand: string;
    model: IModel;
  };
  city: ICity;
  createDate: string;
}
export interface IListItemData {
  id: string | number;
  carModel: string;
  carBrand: string;
  data: string;
  formattedStatus: string;
  status: string;
}
