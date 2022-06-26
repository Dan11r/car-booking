const validation = {
  name: {
    required: "Обязательное поле",
    validate(value: string | number) {
      if (typeof value === "string") {
        if (value.match(/[a-zA-z]/)) {
          return "Только кириллица";
        }
        if (value.match(/[ ]/)) {
          return "Не должно содержать пробелов";
        }
        if (value.length > 50) {
          return "Максимальное кол-во символов: 50";
        }
      }
      return true;
    },
  },
  email: {
    required: "Обязательное поле",
    validate(value: string | number) {
      if (typeof value === "string") {
        if (
          !value
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            )
        ) {
          return "Введите корректный email";
        }
        if (value.length > 50) {
          return "Максимальное кол-во символов: 50";
        }
      }
      return true;
    },
  },
  driverLicense: {
    required: "Обязательное поле",
    validate(value: string | number) {
      if (typeof value === "string") {
        if (!value.match(/^\d{4} \d{6}$/)) {
          return "Введите формате 9999 999999";
        }
      }
      return true;
    },
  },
  select: {
    required: "Обязательное поле",
  },
};

export default validation;
