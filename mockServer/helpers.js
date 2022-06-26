const findModelNameById = (auto, modelId) => {
  let modelName;
  auto.forEach((item) => {
    const name = Object.values(item)[0].find(
      (model) => model.id === +modelId,
    )?.name;
    if (name) {
      modelName = name;
    }
  });
  return modelName || "";
};

const findCityNameByCode = (cities, cityCode) => {
  const CityName = cities.items.find((item) => item.code === cityCode)?.name;
  return CityName || "";
};

const getISOCurrentDate = () => {
  return new Date().toISOString();
};

class Id {
  initState = 0;
  constructor(initState) {
    this.initState = initState;
  }
  get value() {
    return (this.initState += 1);
  }
}
const id = new Id(2);

class Request {
  value = {};
  constructor(db, data, status = "DRAFT", isId, isCreateDate) {
    if (isId) {
      this.value.id = id.value;
    }
    this.value = {
      ...this.value,
      status: {
        code: status,
      },
      person: {
        lastName: data.lastName || "",
        firstName: data.firstName || "",
        secondName: data.secondName || "",
        driverLicense: data.driverLicense || "",
        email: data.email || "",
      },
      auto: {
        brand: data.carBrand || "",
        model: {
          id: data.modelId || "",
          name: findModelNameById(db.auto, data.modelId),
        },
      },
      city: {
        code: data.cityCode || "",
        name: findCityNameByCode(db.cities, data.cityCode),
      },
    };
    if (isCreateDate) {
      this.value.createDate = getISOCurrentDate();
    }
  }
}

module.exports = {
  findModelNameById,
  findCityNameByCode,
  getISOCurrentDate,
  Request,
};
