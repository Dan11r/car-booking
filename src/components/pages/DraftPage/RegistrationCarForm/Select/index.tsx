import { FC } from "react";
import ReactSelect, { CSSObjectWithLabel } from "react-select";
import { Controller, useFormContext } from "react-hook-form";

import ErrorMessage from "@ui/ErrorMessage";
import { IOption, IReactSelect } from "./interface";

import styles from "./Select.module.scss";

const customStyles = {
  control: (s: CSSObjectWithLabel) => ({
    ...s,
    height: "60px",
  }),
  indicatorSeparator: (s: CSSObjectWithLabel) => ({
    ...s,
    display: "none",
  }),
};

const getValue = (value: string | number, array: IOption[]) => {
  return value ? array.find((option) => option.value === value) : "";
};

const Select: FC<IReactSelect> = ({
  placeholder,
  options,
  name,
  rules,
  isDisabled,
}) => {
  const { control } = useFormContext();

  return (
    <div className={styles.selectWrapper}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <ReactSelect
              isDisabled={isDisabled}
              styles={customStyles}
              placeholder={placeholder}
              options={options}
              value={getValue(value, options)}
              onChange={(newValue) => onChange((newValue as IOption).value)}
            />
            {error?.message && <ErrorMessage message={error.message} />}
          </>
        )}
      />
    </div>
  );
};
export default Select;
