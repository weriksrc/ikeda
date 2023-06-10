import BaseServiceHttp from "./baseService";

class AuthHttp extends BaseServiceHttp {
  constructor(id) {
    const resource = "/token";
    const relationship = {
    accessToken: "access-token",
    user: "user",
    admin: "admin"
    };
    const baseURL = process.env.VUE_APP_ROOT_API;
    super(id, resource, relationship, baseURL);
  }
  // accessToken(data) {
  //   return this._http.post(
  //     'https://ikedapersonal.com.br/api/v2/token/access-token',
  //     data,
  //     {
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded'
  //       }
  //     }
  //   )
  // }
}

export default (id) => new AuthHttp(id);