import app from "flarum/admin/app";

// used for first load only
export default class ChannelsState {
  loading: boolean;

  constructor() {
    this.loading = false;
  }

  async load() {
    this.loading = true;

    m.redraw();

    await app.store
      .find("ajaxChatChannels")
      .then(() => {})
      .catch(() => {})
      .finally(() => {
        this.loading = false;

        m.redraw();
      });
  }
}
