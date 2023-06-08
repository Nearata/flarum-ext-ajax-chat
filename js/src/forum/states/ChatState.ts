import AjaxChat from "../models/AjaxChat";
import app from "flarum/forum/app";

export default class ChatState {
  loading: boolean;
  data: AjaxChat[];
  needsFocus: boolean;
  offset: number;
  hasMore: boolean;

  constructor() {
    this.loading = false;
    this.data = [];
    this.needsFocus = false;
    this.offset = 0;
    this.hasMore = false;
  }

  async load(old: boolean = false) {
    if (!app.session.user?.attribute("nearata-ajax-chat.canView")) {
      return;
    }

    this.loading = true;

    m.redraw();

    const params = {
      page: {
        offset: old && this.hasMore ? this.offset : 0,
      },
    };

    const oldData = this.data;

    await app.store
      .find<AjaxChat[]>("ajaxChat", params)
      .then((r) => {
        this.data = app.store.all("ajaxChat");

        if (this.offset === 0 || old) {
          this.hasMore = !!r.payload.links?.next;

          if (this.hasMore) {
            this.offset += 5;
          }
        }

        this.data.sort((a, b) => a.createdAt() - b.createdAt());

        if (this.data.length > oldData.length && !old) {
          this.needsFocus = true;
        }
      })
      .catch((e) => console.error(e))
      .finally(() => {
        this.loading = false;
        m.redraw();
      });
  }

  refresh(needsFocus: boolean = true) {
    this.data = app.store.all<AjaxChat>("ajaxChat");

    this.needsFocus = needsFocus;

    m.redraw();
  }
}
