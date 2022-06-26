import { IRegistrationCarForm } from "@interface/requests";
import { Path } from "react-hook-form";
import { RegisterOptions } from "react-hook-form/dist/types/validator";

export interface IRegistrationCarFormProps {
  id?: string | number;
}

export interface IBaseField {
  name: Path<IRegistrationCarForm>;
  rules: Omit<
    RegisterOptions<IRegistrationCarForm, Path<IRegistrationCarForm>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  placeholder: string;
}
