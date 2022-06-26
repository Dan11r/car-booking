module.exports = {
  requests: [
    {
      id: 1,
      status: {
        code: "DRAFT",
      },
      person: {
        lastName: "Иванов",
        firstName: "Иван",
        secondName: "Иванович",
        driverLicense: "2345 123456",
        email: "test@test.ru",
      },
      auto: {
        brand: "LADA",
        model: {
          id: 1,
          name: "Гранта",
        },
      },
      city: {
        code: "MSK",
        name: "Москва",
      },
      createDate: "2021-06-16T10:13:52.894052Z",
    },
    {
      id: 2,
      status: {
        code: "DRAFT",
      },
      person: {
        lastName: "Калькенов",
        firstName: "Даниир",
        secondName: "Азаматович",
        driverLicense: "2345 123456",
        email: "kalkenovdaniir@yandex.ru",
      },
      auto: {
        brand: "VOLKSWAGEN",
        model: {
          id: 4,
          name: "Поло",
        },
      },
      city: {
        code: "VLG",
        name: "Волгоград",
      },
      createDate: "2021-06-16T10:13:52.894052Z",
    },
  ],
  auto: [
    {
      LADA: [
        {
          id: 1,
          name: "Гранта",
        },
        {
          id: 2,
          name: "Калина",
        },
        {
          id: 3,
          name: "Веста",
        },
      ],
    },
    {
      VOLKSWAGEN: [
        {
          id: 4,
          name: "Поло",
        },
        {
          id: 5,
          name: "Джетта",
        },
        {
          id: 6,
          name: "Тигуан",
        },
        {
          id: 7,
          name: "Поло",
        },
      ],
    },
    {
      KIA: [
        {
          id: 8,
          name: "Рио",
        },
        {
          id: 9,
          name: "Селтос",
        },
        {
          id: 10,
          name: "Церато",
        },
        {
          id: 11,
          name: "Соренто",
        },
      ],
    },
  ],
  cities: {
    items: [
      {
        code: "MSK",
        name: "Москва",
      },
      {
        code: "VLG",
        name: "Волгоград",
      },
      {
        code: "TMB",
        name: "Тамбов",
      },
      {
        code: "BLG",
        name: "Белгород",
      },
      {
        code: "VRG",
        name: "Воронеж",
      },
      {
        code: "LPC",
        name: "Липецк",
      },
    ],
  },
};
