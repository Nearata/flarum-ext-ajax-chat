import AjaxChat from "../models/AjaxChat";
import app from "flarum/forum/app";

export default class ChatState {
  loading: boolean;
  data: AjaxChat[];
  needsFocus: boolean;

  constructor() {
    this.loading = false;
    this.data = [];
    this.needsFocus = false;
  }

  async load(offset: number = 0) {
    this.loading = true;

    m.redraw();

    const params = {
      page: {
        offset: offset,
      },
    };

    const oldData = this.data;

    await app.store
      .find<AjaxChat[]>("ajaxChat", params)
      .then((r) => {
        this.data = [...r];

        this.data.sort((a, b) => a.createdAt() - b.createdAt());

        if (this.data.length > oldData.length) {
          this.needsFocus = true;
        }
      })
      .catch((e) => console.error(e))
      .finally(() => {
        this.loading = false;
        m.redraw();
      });
  }

  refresh() {
    this.data = app.store.all<AjaxChat>("ajaxChat");

    this.needsFocus = true;

    m.redraw();
  }
}
