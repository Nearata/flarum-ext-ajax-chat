import app from 'flarum/admin/app';

app.initializers.add('nearata/ajax-chat', () => {
  console.log('[nearata/ajax-chat] Hello, admin!');
});
