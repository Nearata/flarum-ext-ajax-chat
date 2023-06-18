import ChannelModal from "./ChannelModal";
import ChannelsList from "./ChannelsList";
import app from "flarum/admin/app";
import Component from "flarum/common/Component";
import Button from "flarum/common/components/Button";
import type Mithril from "mithril";

export default class Channels extends Component {
  view(vnode: Mithril.Vnode<this>) {
    return (
      <div class="NearataAjaxChat Channels">
        <h2 class="section_title">
          {app.translator.trans(
            "nearata-ajax-chat.admin.settings.channels.section_title"
          )}
        </h2>
        <ChannelsList />
        <Button className="Button" onclick={() => app.modal.show(ChannelModal)}>
          {app.translator.trans(
            "nearata-ajax-chat.admin.settings.channels.button_label"
          )}
        </Button>
      </div>
    );
  }
}
