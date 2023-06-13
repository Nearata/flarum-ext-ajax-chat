import Component from "flarum/common/Component";
import Switch from "flarum/common/components/Switch";
import ItemList from "flarum/common/utils/ItemList";
import Stream from "flarum/common/utils/Stream";
import app from "flarum/forum/app";
import type Mithril from "mithril";

export default class ChatOptions extends Component {
  loading!: boolean;
  autoFocus: Stream<boolean>;
  playSound: Stream<boolean>;

  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode);

    this.loading = false;
    this.autoFocus = Stream(
      app.session.user!.preferences()!.nearataAjaxChatAutoFocus
    );
    this.playSound = Stream(
      app.session.user!.preferences()!.nearataAjaxChatPlaySound
    );
  }

  view(vnode: Mithril.Vnode<this>) {
    return <div class="ChatOptions">{this.items().toArray()}</div>;
  }

  items() {
    const items = new ItemList();

    items.add(
      "autoFocus",
      <Switch
        onchange={this.onChangeAutoFocus.bind(this)}
        state={this.autoFocus()}
        loading={this.loading}
        disabled={this.loading}
      >
        {app.translator.trans(
          "nearata-ajax-chat.forum.chat.options.auto_focus"
        )}
      </Switch>
    );

    items.add(
      "playSound",
      <Switch
        onchange={this.onChangePlaySound.bind(this)}
        state={this.playSound()}
        loading={this.loading}
        disabled={this.loading}
      >
        {app.translator.trans(
          "nearata-ajax-chat.forum.chat.options.play_sound"
        )}
      </Switch>
    );

    return items;
  }

  onChangeAutoFocus(value: boolean) {
    this.loading = true;

    app.session
      .user!.savePreferences({
        nearataAjaxChatAutoFocus: value,
      })
      .then(() => this.autoFocus(value))
      .catch(() => {})
      .finally(() => {
        this.loading = false;
        m.redraw();
      });
  }

  onChangePlaySound(value: boolean) {
    this.loading = true;

    app.session
      .user!.savePreferences({
        nearataAjaxChatPlaySound: value,
      })
      .then(() => this.playSound(value))
      .catch(() => {})
      .finally(() => {
        this.loading = false;
        m.redraw();
      });
  }
}
