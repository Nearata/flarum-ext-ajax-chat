import Chat from "./components/Chat";
import { override } from "flarum/common/extend";
import app from "flarum/forum/app";
import IndexPage from "flarum/forum/components/IndexPage";

app.initializers.add("nearata-ajax-chat", () => {
  override(IndexPage.prototype, "hero", function (original) {
    if (!app.session.user?.attribute("nearata-ajax-chat.canView")) {
      return original();
    }

    return [original(), <Chat />];
  });
});

export { default as extend } from "./extend";
