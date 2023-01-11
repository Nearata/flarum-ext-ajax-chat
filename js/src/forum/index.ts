import app from 'flarum/forum/app';

app.initializers.add('nearata/ajax-chat', () => {
  console.log('[nearata/ajax-chat] Hello, forum!');
});
