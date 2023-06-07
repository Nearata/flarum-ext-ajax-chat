import AjaxChat from "../models/AjaxChat";
import Component from "flarum/common/Component";
import Tooltip from "flarum/common/components/Tooltip";
import humanTime from "flarum/common/utils/humanTime";
import app from "flarum/forum/app";
import type Mithril from "mithril";

export default class ChatMessageEdited extends Component {
  message!: AjaxChat;

  view(vnode: Mithril.Vnode<this>) {
    const message = vnode.attrs.message;
    const tooltipText = app.translator.trans(
      "nearata-ajax-chat.forum.chat.message.edited_tooltip",
      { user: message.editedUser(), ago: humanTime(message.editedAt()) }
    );

    return (
      <Tooltip text={tooltipText}>
        <div class="editedAt">
          {app.translator.trans(
            "nearata-ajax-chat.forum.chat.message.edited_text"
          )}
        </div>
      </Tooltip>
    );
  }
}
