import AjaxChat from "../models/AjaxChat";
import Component from "flarum/common/Component";
import Link from "flarum/common/components/Link";
import avatar from "flarum/common/helpers/avatar";
import humanTime from "flarum/common/helpers/humanTime";
import userOnline from "flarum/common/helpers/userOnline";
import username from "flarum/common/helpers/username";
import app from "flarum/forum/app";
import type Mithril from "mithril";

export default class ChatMessage extends Component {
  message!: AjaxChat;

  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode);

    this.message = vnode.attrs.message;
  }

  view(vnode: Mithril.Vnode<this>) {
    return (
      <div class="NearataAjaxChat ChatMessage">
        <div class="avatar">{avatar(this.message.user())}</div>
        <div class="body">
          <header>
            <div class="online">{userOnline(this.message.user())}</div>
            <Link href={app.route.user(this.message.user())}>
              {username(this.message.user())}
            </Link>
            <div class="createdAt">{humanTime(this.message.createdAt())}</div>
          </header>
          <main>
            <div class="content">{this.message.content()}</div>
          </main>
        </div>
      </div>
    );
  }
}
