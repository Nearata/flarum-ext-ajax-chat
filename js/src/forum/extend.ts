import AjaxChat from "./models/AjaxChat";
import Extend from "flarum/common/extenders";

export default [new Extend.Store().add("ajaxChat", AjaxChat)];
