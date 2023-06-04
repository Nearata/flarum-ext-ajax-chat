import AjaxChat from "../models/AjaxChat";
import ChatState from "../states/ChatState";
import Component from "flarum/common/Component";
import Button from "flarum/common/components/Button";
import Tooltip from "flarum/common/components/Tooltip";
import Stream from "flarum/common/utils/Stream";
import app from "flarum/forum/app";
import type Mithril from "mithril";

export default class ChatComposer extends Component {
  // @ts-expect-error
  state!: ChatState;
  content!: Stream<string>;
  loading!: boolean;

  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode);

    this.state = vnode.attrs.state;
    this.content = Stream("");
    this.loading = false;
  }

  view(vnode: Mithril.Vnode<this>) {
    return (
      <div class="ChatComposer">
        <form>
          <input
            class="FormControl"
            type="text"
            name="content"
            bidi={this.content}
            placeholder={app.translator.trans(
              "nearata-ajax-chat.forum.chat.composer.placeholder_label"
            )}
            disabled={this.loading}
          />
          <Tooltip
            text={app.translator.trans(
              "nearata-ajax-chat.forum.chat.composer.submit_button_tooltip"
            )}
          >
            <Button
              class="Button Button--icon"
              icon="fas fa-paper-plane"
              onclick={this.onClick.bind(this)}
              type="submit"
              loading={this.loading}
            />
          </Tooltip>
        </form>
      </div>
    );
  }

  onClick(e: PointerEvent) {
    e.preventDefault();

    this.loading = true;

    app.store
      .createRecord<AjaxChat>("ajaxChat")
      .save({ content: this.content() })
      .then(() => {
        this.content("");

        this.state.refresh();
      })
      .catch((e) => console.error(e))
      .finally(() => {
        this.loading = false;
        m.redraw();
      });
  }
}
