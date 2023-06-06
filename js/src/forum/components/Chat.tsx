import ChatState from "../states/ChatState";
import ChatComposer from "./ChatComposer";
import ChatList from "./ChatList";
import ChatOptions from "./ChatOptions";
import Component from "flarum/common/Component";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import app from "flarum/forum/app";
import type Mithril from "mithril";

export default class Chat extends Component {
  // @ts-expect-error
  state!: ChatState;

  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode);

    this.state = vnode.attrs.state;
  }

  view(vnode: Mithril.Vnode<this>) {
    return (
      <div class="NearataAjaxChat container">
        <div class="Chat">
          <header class="header">
            <div class="label">
              {app.translator.trans("nearata-ajax-chat.forum.chat.label")}
            </div>
            {this.state.loading && <LoadingIndicator />}
          </header>
          <main class="main">
            <ChatList state={this.state} />
          </main>
          <footer class="footer">
            {app.session.user!.attribute("nearata-ajax-chat.canCreate") && (
              <ChatComposer state={this.state} />
            )}
            <ChatOptions />
          </footer>
        </div>
      </div>
    );
  }
}
