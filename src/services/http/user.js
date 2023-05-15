
import BaseServiceHttp from "./baseService";

class UserHttp extends BaseServiceHttp {
  constructor(id) {
    const resource = "/user";
    const relationship = {
      bodyComposition: "body_composition",
      circumferences: "circumference",
      photo: "photo",
      skinFolds: "skin_folds",
      me: "me"
    };
    const baseURL = process.env.VUE_APP_ROOT_API;
    super(id, resource, relationship, baseURL);
  }
}

export default (id) => new UserHttp(id);