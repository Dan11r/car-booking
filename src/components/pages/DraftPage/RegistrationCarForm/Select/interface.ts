import { IBaseField } from "../interface";

export interface IOption {
  readonly value: string | number;
  readonly label: string;
}

export interface IReactSelect extends IBaseField {
  options: IOption[];
  isDisabled?: boolean;
}
