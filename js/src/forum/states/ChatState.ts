import AjaxChat from "../../common/models/AjaxChat";
import app from "flarum/forum/app";
import AjaxChatChannels from "src/common/models/AjaxChatChannels";

export default class ChatState {
  loading: boolean;
  data: AjaxChat[];
  needsFocus: boolean;
  offset: number;
  hasMore: boolean;
  channelId: string | null;
  loadingChannels: boolean;

  constructor() {
    this.loading = false;
    this.data = [];
    this.needsFocus = false;
    this.offset = 0;
    this.hasMore = false;
    this.channelId = null;
    this.loadingChannels = false;
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
      channelId: this.channelId,
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

          if (
            oldData.length &&
            app.session.user!.preferences()!.nearataAjaxChatPlaySound
          ) {
            const audio = new Audio(
              `${app.forum.attribute(
                "baseUrl"
              )}/assets/extensions/nearata-ajax-chat/notification_sound.mp3`
            );

            audio.volume = 0.5;

            audio.addEventListener(
              "canplaythrough",
              () => {
                audio.play();
              },
              { once: true }
            );
          }
        }
      })
      .catch(() => {})
      .finally(() => {
        this.loading = false;
        m.redraw();
      });
  }

  async loadChannels() {
    this.loadingChannels = true;

    await app.store
      .find("ajaxChatChannels")
      .then(() => {})
      .catch(() => {})
      .finally(() => {
        this.loadingChannels = false;

        m.redraw();
      });
  }

  refresh(needsFocus: boolean = true) {
    this.data = app.store.all<AjaxChat>("ajaxChat");

    this.needsFocus = needsFocus;

    m.redraw();
  }

  switchChannel(channelId: string | null) {
    this.channelId = channelId;

    this.data = [];

    this.load();
  }

  getData() {
    if (this.channelId) {
      return this.data.filter(
        (val) => val.channel() && val.channel()!.id() === this.channelId
      );
    }

    return this.data.filter((val) => !val.channel());
  }
}
