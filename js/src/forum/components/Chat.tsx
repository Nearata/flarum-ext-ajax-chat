import ChatState from "../states/ChatState";
import ChatComposer from "./ChatComposer";
import ChatList from "./ChatList";
import Component from "flarum/common/Component";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import app from "flarum/forum/app";
import type Mithril from "mithril";

export default class Chat extends Component {
  // @ts-expect-error
  state!: ChatState;

  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode);

    this.state = new ChatState();
    this.state.load();
  }

  view(vnode: Mithril.Vnode<this>) {
    return (
      <div class="NearataAjaxChat container">
        <div class="Chat">
          <div class="heading">
            {app.translator.trans("nearata-ajax-chat.forum.chat.label")}
          </div>
          <ChatList state={this.state} />
          {this.state.loading && <LoadingIndicator />}
          <ChatComposer state={this.state} />
        </div>
      </div>
    );
  }
}
