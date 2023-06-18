import AjaxChatChannels from "../../common/models/AjaxChatChannels";
import app from "flarum/admin/app";
import Button from "flarum/common/components/Button";
import Modal from "flarum/common/components/Modal";
import ItemList from "flarum/common/utils/ItemList";
import Stream from "flarum/common/utils/Stream";
import extractText from "flarum/common/utils/extractText";
import Mithril from "mithril";

export default class ChannelModal extends Modal {
  id!: string;
  name: Stream<string>;
  record!: AjaxChatChannels | undefined;

  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode);

    this.name = Stream(vnode.attrs.name || "");
    this.id = vnode.attrs.id;
    this.record = app.store.getById("ajaxChatChannels", this.id);
  }

  className(): string {
    return "Modal--small NearataAjaxChat Channels";
  }

  title() {
    if (this.record) {
      return app.translator.trans(
        "nearata-ajax-chat.admin.settings.channels.modal.title.edit"
      );
    }

    return app.translator.trans(
      "nearata-ajax-chat.admin.settings.channels.modal.title.create"
    );
  }

  content() {
    return <div className="Modal-body">{this.fields().toArray()}</div>;
  }

  fields() {
    const items = new ItemList();

    items.add(
      "name",
      <div className="Form-group">
        <label>
          {app.translator.trans(
            "nearata-ajax-chat.admin.settings.channels.modal.fields.name"
          )}
        </label>
        <input
          className="FormControl"
          placeholder="Madoka Magica"
          bidi={this.name}
          loading={this.loading}
        />
      </div>
    );

    items.add(
      "submit",
      <div className="Form-group">
        <Button
          type="submit"
          className="Button Button--primary"
          loading={this.loading}
          disabled={this.loading}
        >
          {app.translator.trans(
            "nearata-ajax-chat.admin.settings.channels.modal.actions.save_label"
          )}
        </Button>

        {this.record && (
          <Button
            className="Button"
            loading={this.loading}
            disabled={this.loading}
            onclick={this.ondelete.bind(this)}
          >
            {app.translator.trans(
              "nearata-ajax-chat.admin.settings.channels.modal.actions.delete_label"
            )}
          </Button>
        )}
      </div>
    );

    return items;
  }

  onsubmit(e: SubmitEvent): void {
    e.preventDefault();

    this.loading = true;

    if (this.record) {
      this.record
        .save({
          name: this.name(),
        })
        .then(() => {
          this.hide();
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;

          m.redraw();
        });
    } else {
      app.store
        .createRecord("ajaxChatChannels")
        .save({
          name: this.name(),
        })
        .then(() => {
          this.hide();
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
          m.redraw();
        });
    }
  }

  ondelete(_: PointerEvent) {
    if (
      confirm(
        extractText(
          app.translator.trans(
            "nearata-ajax-chat.admin.settings.channels.modal.delete_confirm_text"
          )
        )
      )
    ) {
      this.loading = true;

      app.store
        .getById("ajaxChatChannels", this.id)
        ?.delete()
        .then(() => {
          this.hide();
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
          m.redraw();
        });
    }
  }
}
