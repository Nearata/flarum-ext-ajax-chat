import AjaxChat from "../models/AjaxChat";
import ChatState from "../states/ChatState";
import ChatMessageEdited from "./ChatMessageEdited";
import Component from "flarum/common/Component";
import Button from "flarum/common/components/Button";
import Link from "flarum/common/components/Link";
import avatar from "flarum/common/helpers/avatar";
import humanTime from "flarum/common/helpers/humanTime";
import userOnline from "flarum/common/helpers/userOnline";
import username from "flarum/common/helpers/username";
import User from "flarum/common/models/User";
import ItemList from "flarum/common/utils/ItemList";
import Stream from "flarum/common/utils/Stream";
import extractText from "flarum/common/utils/extractText";
import app from "flarum/forum/app";
import type Mithril from "mithril";

export default class ChatMessage extends Component {
  message!: AjaxChat;
  // @ts-expect-error
  state!: ChatState;

  content!: Stream<string>;
  editing!: boolean;
  loading!: boolean;

  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode);

    this.message = vnode.attrs.message;
    this.state = vnode.attrs.state;

    this.content = Stream(this.message.content());
    this.editing = false;
    this.loading = false;
  }

  view(vnode: Mithril.Vnode<this>) {
    const user = this.message.user() as User;

    return (
      <div class="ChatMessage">
        <div class="avatar">{avatar(user)}</div>
        <div class="body">
          <header class="header">
            {user.lastSeenAt() && user.isOnline() && (
              <div class="online">{userOnline(user)}</div>
            )}
            <Link href={app.route.user(user)}>
              {username(this.message.user())}
            </Link>
            <div class="createdAt">{humanTime(this.message.createdAt()!)}</div>
            {this.message.editedAt() && (
              <ChatMessageEdited message={this.message} />
            )}
          </header>
          <main class="main">
            <div class="content">
              {this.editing ? (
                <input
                  class="FormControl"
                  type="text"
                  name="content"
                  bidi={this.content}
                  disabled={this.loading}
                />
              ) : (
                this.message.content()
              )}
            </div>
          </main>
          <footer class="footer">{this.controls().toArray()}</footer>
        </div>
      </div>
    );
  }

  controls() {
    const items = new ItemList();

    const sessionUser = app.session.user!;
    const messageUser = this.message.user() as User;

    const canEdit =
      (sessionUser === messageUser &&
        sessionUser.attribute("nearata-ajax-chat.canEdit")) ||
      sessionUser.attribute("nearata-ajax-chat.canEditOthers");

    if (canEdit && !this.editing) {
      items.add(
        "edit",
        <Button
          className="Button Button--link"
          onclick={() => (this.editing = true)}
        >
          {app.translator.trans(
            "nearata-ajax-chat.forum.chat.message.actions.edit_label"
          )}
        </Button>
      );
    }

    const canDelete =
      (sessionUser === messageUser &&
        sessionUser.attribute("nearata-ajax-chat.canDelete")) ||
      sessionUser.attribute("nearata-ajax-chat.canDeleteOthers");

    if (canDelete && !this.editing) {
      items.add(
        "delete",
        <Button
          className="Button Button--link"
          onclick={this.onDelete.bind(this)}
          loading={this.loading}
          disabled={this.loading}
        >
          {app.translator.trans(
            "nearata-ajax-chat.forum.chat.message.actions.delete_label"
          )}
        </Button>
      );
    }

    if (this.editing) {
      items.add(
        "saveEdit",
        <Button
          className="Button Button--link"
          onclick={this.onSaveEdit.bind(this)}
          loading={this.loading}
          disabled={this.loading}
        >
          {app.translator.trans(
            "nearata-ajax-chat.forum.chat.message.actions.edit_save_label"
          )}
        </Button>
      );
    }

    if (this.editing) {
      items.add(
        "cancelEdit",
        <Button
          className="Button Button--link"
          onclick={this.onCancelEdit.bind(this)}
        >
          {app.translator.trans(
            "nearata-ajax-chat.forum.chat.message.actions.edit_cancel_label"
          )}
        </Button>
      );
    }

    return items;
  }

  onSaveEdit(e: PointerEvent) {
    this.loading = true;

    if (this.content() === this.message.content()) {
      this.editing = false;
      this.loading = false;
      return;
    }

    this.message
      .save({
        content: this.content(),
      })
      .then(() => this.state.refresh(false))
      .catch((e) => console.error(e))
      .finally(() => {
        this.editing = false;
        this.loading = false;

        m.redraw();
      });
  }

  onCancelEdit(e: PointerEvent) {
    this.editing = false;
    this.content(this.message.content());
  }

  onDelete(e: PointerEvent) {
    const message = extractText(
      app.translator.trans(
        "nearata-ajax-chat.forum.chat.message.actions.delete_confirm_text"
      )
    );

    if (confirm(message)) {
      this.loading = true;

      this.message
        .delete()
        .then(() => this.state.refresh(false))
        .finally(() => {
          this.loading = false;
          m.redraw();
        });
    }
  }
}
