import ChatState from "../states/ChatState";
import Component from "flarum/common/Component";
import Button from "flarum/common/components/Button";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import SelectDropdown from "flarum/common/components/SelectDropdown";
import Separator from "flarum/common/components/Separator";
import ItemList from "flarum/common/utils/ItemList";
import app from "flarum/forum/app";
import type Mithril from "mithril";
import AjaxChatChannels from "src/common/models/AjaxChatChannels";

export default class ChatChannels extends Component {
  // @ts-expect-error
  state!: ChatState;

  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode);

    this.state = vnode.attrs.state;
    this.state.loadChannels();
  }

  view(vnode: Mithril.Vnode<this>) {
    return (
      <div class="Channels">
        {this.state.loadingChannels && <LoadingIndicator />}
        {!this.state.loadingChannels && (
          <SelectDropdown>{this.items().toArray()}</SelectDropdown>
        )}
      </div>
    );
  }

  items() {
    const items = new ItemList();

    items.add(
      "general",
      <Button
        className="Button"
        active={this.state.channelId === null}
        onclick={() => this.state.switchChannel(null)}
      >
        {app.translator.trans(
          "nearata-ajax-chat.forum.chat.general_channel_label"
        )}
      </Button>
    );

    items.add("separator", <Separator />);

    for (const i of app.store.all<AjaxChatChannels>("ajaxChatChannels")) {
      items.add(
        i.name(),
        <Button
          className="Button"
          data-channel-id={i.id()}
          active={this.state.channelId === i.id()}
          onclick={() => {
            this.state.switchChannel(i.id()!);
          }}
        >
          {i.name()}
        </Button>
      );
    }

    return items;
  }
}
