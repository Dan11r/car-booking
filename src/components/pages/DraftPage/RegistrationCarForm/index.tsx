import { FC } from "react";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import isEqual from "lodash/isEqual";
import { observer } from "mobx-react-lite";

import Button from "@ui/Button";
import { IRegistrationCarForm } from "@interface/requests";
import Checkbox from "@ui/Checkbox";
import { rootStore } from "@store";
import CarsFields from "./CarsFields";

import Select from "./Select";
import Input from "./Input";
import { useCheckboxIsChecked, useSetDefaultValues } from "./hooks";
import { IRegistrationCarFormProps } from "./interface";
import validation from "./validation";

import styles from "./RegistrationCarForm.module.scss";

const RegistrationCarForm: FC<IRegistrationCarFormProps> = observer(
  ({ id }) => {
    const {
      citiesSelectOptions,
      getRequestFormData,
      postRequest,
      putRequest,
      postRegistration,
    } = rootStore.requestFormStore;

    const methods = useForm<IRegistrationCarForm>({ mode: "onSubmit" });
    const { handleSubmit, reset, watch } = methods;

    const navigate = useNavigate();

    useSetDefaultValues(getRequestFormData, reset);
    const [isChecked, checkboxRef] = useCheckboxIsChecked();

    const onSave: SubmitHandler<IRegistrationCarForm> = (data) => {
      if (id) {
        putRequest({ ...data, id });
      } else {
        postRequest(data);
      }
      reset();
      navigate("/");
    };
    const onRegistration: SubmitHandler<IRegistrationCarForm> = (data) => {
      if (id) {
        postRegistration({ ...data, id });
      } else {
        postRegistration(data);
      }
      reset();
      navigate("/");
    };

    return (
      <FormProvider {...methods}>
        <form className={styles.form}>
          <div className={styles.input}>
            <Input
              name="lastName"
              placeholder="Фамилия"
              rules={validation.name}
            />
          </div>
          <div className={styles.input}>
            <Input name="firstName" placeholder="Имя" rules={validation.name} />
          </div>
          <div className={styles.input}>
            <Input
              name="secondName"
              placeholder="Отчество"
              rules={validation.name}
            />
          </div>
          <div className={styles.input}>
            <Input name="email" placeholder="Email" rules={validation.email} />
          </div>
          <div className={styles.groupWrapper}>
            <div className={styles.box}>
              <div className={styles.boxItem}>
                <Input
                  name="driverLicense"
                  placeholder="Водительское удостоверение"
                  rules={validation.driverLicense}
                />
              </div>
              <div className={styles.boxItem}>
                <Select
                  placeholder="Город"
                  options={citiesSelectOptions}
                  name="cityCode"
                  rules={validation.select}
                />
              </div>
            </div>
            <div className={styles.box}>
              <CarsFields />
            </div>
          </div>
          <div className={styles.checkbox}>
            <Checkbox ref={checkboxRef}>
              Согласие на обработку персональных данных
            </Checkbox>
          </div>
          <div className={styles.buttonWrapper}>
            <Button
              disabled={isEqual(watch(), getRequestFormData) || !isChecked}
              type="button"
              onClick={handleSubmit(onSave)}
            >
              Сохранить
            </Button>
            <Button
              disabled={!isChecked}
              type="button"
              onClick={handleSubmit(onRegistration)}
            >
              Отправить на регистрацию
            </Button>
          </div>
        </form>
      </FormProvider>
    );
  },
);

export default RegistrationCarForm;
