import Ember from 'ember';

export default Ember.Controller.extend({
  saveBookmark() {
    const attributes = {
      title: this.title,
      address: this.address,
    };

    fetch(`https://tiny-tn.herokuapp.com/collections/dm-bookmarks`, {
      method: `POST`,
      headers: {
        Accept: `application/json`,
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(attributes),
    }).then((res) => res.json())
    .then((data) => {
      this.addBookmark(data);
      this.clearForm();
    });

  },
  clearForm() {
   this.set(`title`, ``);
   this.set(`address`, ``);
 },
 addBookmark(bookmark) {
   this.set(`model`, [...this.model, bookmark]);
 },
});
