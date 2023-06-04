import Model from "flarum/common/Model";
import User from "flarum/common/models/User";

export default class AjaxChat extends Model {
  content = Model.attribute("content");
  createdAt = Model.attribute("createdAt", Model.transformDate);
  updatedAt = Model.attribute("updatedAt", Model.transformDate);

  user() {
    return Model.hasOne<User>("user").call(this);
  }
}
