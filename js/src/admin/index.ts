import app from "flarum/admin/app";

app.initializers.add("nearata-ajax-chat", () => {
  app.extensionData
    .for("nearata-ajax-chat")
    .registerPermission(
      {
        icon: "fas fa-eye",
        label: app.translator.trans("nearata-ajax-chat.admin.permissions.view"),
        permission: "nearata-ajax-chat.view",
      },
      "view"
    )
    .registerPermission(
      {
        icon: "fas fa-plus",
        label: app.translator.trans(
          "nearata-ajax-chat.admin.permissions.create"
        ),
        permission: "nearata-ajax-chat.create",
      },
      "view"
    )
    .registerPermission(
      {
        icon: "fas fa-edit",
        label: app.translator.trans("nearata-ajax-chat.admin.permissions.edit"),
        permission: "nearata-ajax-chat.edit",
      },
      "view"
    )
    .registerPermission(
      {
        icon: "fas fa-trash",
        label: app.translator.trans(
          "nearata-ajax-chat.admin.permissions.delete"
        ),
        permission: "nearata-ajax-chat.delete",
      },
      "view"
    );
});
