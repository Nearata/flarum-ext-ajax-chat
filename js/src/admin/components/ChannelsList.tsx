import AjaxChatChannels from "../../common/models/AjaxChatChannels";
import ChannelsState from "../states/ChannelsState";
import ChannelModal from "./ChannelModal";
import app from "flarum/admin/app";
import Component from "flarum/common/Component";
import Button from "flarum/common/components/Button";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import type Mithril from "mithril";

export default class ChannelsList extends Component {
  // @ts-expect-error
  state!: ChannelsState;

  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode);

    this.state = new ChannelsState();
    this.state.load();
  }

  view(vnode: Mithril.Vnode<this>) {
    return (
      <div class="ChannelsList">
        {this.state.loading && <LoadingIndicator />}
        {!this.state.loading &&
          app.store.all<AjaxChatChannels>("ajaxChatChannels").map((val) => {
            return (
              <div key={val.id()} class="channel" data-id={val.id()}>
                <label>{val.name()}</label>
                <Button
                  className="Button Button--primary"
                  onclick={() =>
                    app.modal.show(ChannelModal, {
                      id: val.id(),
                      name: val.name(),
                    })
                  }
                >
                  Edit
                </Button>
              </div>
            );
          })}
      </div>
    );
  }
}
