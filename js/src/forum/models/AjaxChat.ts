import Model from "flarum/common/Model";
import User from "flarum/common/models/User";

export default class AjaxChat extends Model {
  content = Model.attribute("content");
  createdAt = Model.attribute("createdAt", Model.transformDate);
  updatedAt = Model.attribute("updatedAt", Model.transformDate);
  editedAt = Model.attribute("editedAt", Model.transformDate);
  canEdit = Model.attribute<boolean>("canEdit");
  canDelete = Model.attribute<boolean>("canDelete");

  user() {
    return Model.hasOne<User>("user").call(this) as User;
  }

  editedUser() {
    return Model.hasOne<User | null>("editedUser").call(this);
  }
}
