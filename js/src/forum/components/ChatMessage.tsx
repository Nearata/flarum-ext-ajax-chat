import AjaxChat from "../models/AjaxChat";
import Component from "flarum/common/Component";
import Link from "flarum/common/components/Link";
import avatar from "flarum/common/helpers/avatar";
import humanTime from "flarum/common/helpers/humanTime";
import userOnline from "flarum/common/helpers/userOnline";
import username from "flarum/common/helpers/username";
import User from "flarum/common/models/User";
import app from "flarum/forum/app";
import type Mithril from "mithril";

export default class ChatMessage extends Component {
  message!: AjaxChat;

  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode);

    this.message = vnode.attrs.message;
  }

  view(vnode: Mithril.Vnode<this>) {
    const user = this.message.user() as User;

    return (
      <div class="ChatMessage">
        <div class="avatar">{avatar(user)}</div>
        <div class="body">
          <header>
            {user.lastSeenAt() && user.isOnline() && (
              <div class="online">{userOnline(user)}</div>
            )}
            <Link href={app.route.user(user)}>
              {username(this.message.user())}
            </Link>
            <div class="createdAt">{humanTime(this.message.createdAt()!)}</div>
          </header>
          <main>
            <div class="content">{this.message.content()}</div>
          </main>
        </div>
      </div>
    );
  }
}
