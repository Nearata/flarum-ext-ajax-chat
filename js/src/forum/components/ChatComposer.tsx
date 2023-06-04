import AjaxChat from "../models/AjaxChat";
import ChatState from "../states/ChatState";
import Component from "flarum/common/Component";
import Button from "flarum/common/components/Button";
import Stream from "flarum/common/utils/Stream";
import app from "flarum/forum/app";
import type Mithril from "mithril";

export default class ChatComposer extends Component {
  // @ts-expect-error
  state!: ChatState;
  content!: Stream<string>;

  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode);

    this.state = vnode.attrs.state;
    this.content = Stream("");
  }

  view(vnode: Mithril.Vnode<this>) {
    return (
      <div class="ChatComposer">
        <input type="text" name="content" bidi={this.content} />
        <Button onclick={this.onClick.bind(this)}>Send</Button>
      </div>
    );
  }

  onClick(e: PointerEvent) {
    e.preventDefault();

    app.store
      .createRecord<AjaxChat>("ajaxChat")
      .save({ content: this.content() })
      .then((r) => {
        this.content("");

        this.state.refresh();
      })
      .catch((e) => console.error(e));
  }
}
