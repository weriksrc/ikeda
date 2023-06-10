import BaseServiceHttp from "./baseService";

class MentorshipHttp extends BaseServiceHttp {
  constructor(id) {
    const resource = "/mentorship";
    const relationship = {
      week: "week"
    };
    const baseURL = process.env.VUE_APP_ROOT_API;
    super(id, resource, relationship, baseURL);
  }

    video(data) {
    return this._http.get(
      `https://ikedapersonal.com.br/api/v2/mentorship/${data.id}/week/${data.id_week}/video`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
}

export default (id) => new MentorshipHttp(id);