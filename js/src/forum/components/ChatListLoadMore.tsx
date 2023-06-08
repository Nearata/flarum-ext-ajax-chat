import ChatState from "../states/ChatState";
import Component from "flarum/common/Component";
import Button from "flarum/common/components/Button";
import app from "flarum/forum/app";
import type Mithril from "mithril";

export default class ChatListLoadMore extends Component {
  // @ts-expect-error
  state!: ChatState;
  loading!: boolean;

  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode);

    this.state = vnode.attrs.state;
    this.loading = false;
  }

  view(_: Mithril.Vnode<this>) {
    if (!this.state.hasMore) {
      return;
    }

    return (
      <div class="loadMore">
        <Button
          className="Button"
          onclick={this.loadMore.bind(this)}
          loading={this.loading}
          disabled={this.loading}
        >
          {app.translator.trans(
            "nearata-ajax-chat.forum.chat.load_more_button_label"
          )}
        </Button>
      </div>
    );
  }

  async loadMore(_: PointerEvent) {
    this.loading = true;

    await this.state.load(true).then(() => {
      this.loading = false;
      m.redraw();
    });
  }
}
