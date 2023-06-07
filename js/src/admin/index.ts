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
      "start"
    )
    .registerPermission(
      {
        icon: "fas fa-edit",
        label: app.translator.trans("nearata-ajax-chat.admin.permissions.edit"),
        permission: "nearata-ajax-chat.edit",
      },
      "reply"
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
    )
    .registerPermission(
      {
        icon: "fas fa-edit",
        label: app.translator.trans(
          "nearata-ajax-chat.admin.permissions.edit_others"
        ),
        permission: "nearata-ajax-chat.editOthers",
      },
      "moderate"
    )
    .registerPermission(
      {
        icon: "fas fa-edit",
        label: app.translator.trans(
          "nearata-ajax-chat.admin.permissions.delete_others"
        ),
        permission: "nearata-ajax-chat.deleteOthers",
      },
      "moderate"
    );
});
