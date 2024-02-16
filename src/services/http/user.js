import BaseServiceHttp from "./baseService";

class UserHttp extends BaseServiceHttp {
  constructor(id) {
    const resource = "/user";
    const relationship = {
      bodyComposition: "body_composition",
      circumferences: "circumference",
      photo: "photo",
      skinFolds: "skin_folds",
      me: "me",
    };
    const baseURL = process.env.VUE_APP_ROOT_API;
    super(id, resource, relationship, baseURL);
  }
  create(data) {
    return this._http.post(
      `${process.env.VUE_APP_ROOT_API}/user`,
      // 'https://ikedapersonal.com.br/api/v2/user',ike
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:8080",
        },
      }
    );
  }
}

export default (id) => new UserHttp(id);
