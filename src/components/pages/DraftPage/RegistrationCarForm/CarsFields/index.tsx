import { FC, useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { observer } from "mobx-react-lite";

import { rootStore } from "@store";
import Select from "../Select";
import validation from "../validation";
import useCarModelIsDisabled from "./hooks";

import styles from "./CarsFields.module.scss";

const CarsFields: FC = observer(() => {
  const {
    carBrandSelectOptions,
    carModelSelectOptions,
    setSelectedBrand,
    getRequestFormData,
  } = rootStore.requestFormStore;

  const { control, setValue } = useFormContext();
  const carBrand = useWatch({
    control,
    name: "carBrand",
  });

  const isDisabled = useCarModelIsDisabled(carBrand);

  useEffect(() => {
    if (carBrand) {
      setSelectedBrand(carBrand);
    }
  }, [carBrand]);
  useEffect(() => {
    if (
      carModelSelectOptions.every(
        (o) => +o.value !== +getRequestFormData?.modelId && o.value !== "",
      )
    ) {
      setValue("modelId", undefined);
    }
  }, [carModelSelectOptions]);
  return (
    <>
      <div className={styles.boxItem}>
        <Select
          placeholder="Марка автомобиля"
          options={carBrandSelectOptions}
          name="carBrand"
          rules={validation.select}
        />
      </div>
      <div className={styles.boxItem}>
        <Select
          placeholder="Модель"
          options={carModelSelectOptions}
          name="modelId"
          rules={validation.select}
          isDisabled={isDisabled}
        />
      </div>
    </>
  );
});

export default CarsFields;
