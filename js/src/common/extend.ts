import AjaxChat from "./models/AjaxChat";
import AjaxChatChannels from "./models/AjaxChatChannels";
import Extend from "flarum/common/extenders";

export default [
  new Extend.Store()
    .add("ajaxChatChannels", AjaxChatChannels)
    .add("ajaxChat", AjaxChat),
];
