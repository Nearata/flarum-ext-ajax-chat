import Chat from "./components/Chat";
import ChatState from "./states/ChatState";
import { extend, override } from "flarum/common/extend";
import ForumApplication from "flarum/forum/ForumApplication";
import app from "flarum/forum/app";
import IndexPage from "flarum/forum/components/IndexPage";

app.initializers.add("nearata-ajax-chat", () => {
  extend(ForumApplication.prototype, "mount", function () {
    if (!app.session.user?.attribute("nearata-ajax-chat.canView")) {
      return;
    }

    app.nearataAjaxChatState = new ChatState();
    app.nearataAjaxChatState.load();

    setInterval(async function () {
      if (!app.current.get("stream")) {
        await app.nearataAjaxChatState.load();
      }
    }, 10000);
  });

  override(IndexPage.prototype, "hero", function (original) {
    if (!app.session.user?.attribute("nearata-ajax-chat.canView")) {
      return original();
    }

    return [original(), <Chat state={app.nearataAjaxChatState} />];
  });
});

export { default as extend } from "./extend";
