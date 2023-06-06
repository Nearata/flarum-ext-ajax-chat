import ChatState from "../states/ChatState";
import ChatMessage from "./ChatMessage";
import Component from "flarum/common/Component";
import Placeholder from "flarum/common/components/Placeholder";
import app from "flarum/forum/app";
import type Mithril from "mithril";

export default class ChatList extends Component {
  // @ts-expect-error
  state!: ChatState;

  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode);

    this.state = vnode.attrs.state;
  }

  onupdate(vnode: Mithril.VnodeDOM<this>): void {
    super.onupdate(vnode);

    if (this.state.needsFocus) {
      this.state.needsFocus = false;

      this.element.lastElementChild?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }

  view(vnode: Mithril.Vnode<this>) {
    return (
      <div class="ChatList">
        {!this.state.loading && !this.state.data.length && (
          <Placeholder
            text={app.translator.trans(
              "nearata-ajax-chat.forum.chat.list.placeholder_label"
            )}
          />
        )}
        {this.state.data.map((i) => {
          return <ChatMessage message={i} />;
        })}
      </div>
    );
  }
}
