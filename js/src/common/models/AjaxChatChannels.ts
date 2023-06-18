import Model from "flarum/common/Model";

export default class AjaxChatChannels extends Model {
  name = Model.attribute<string>("name");
  createdAt = Model.attribute("createdAt", Model.transformDate);
  updatedAt = Model.attribute("updatedAt", Model.transformDate);
}
