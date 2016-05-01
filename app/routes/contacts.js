import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return fetch(`https://tiny-tn.herokuapp.com/collections/dm-people`)
    .then((res) => res.json()).then((data) => {
      return data;
    });
  }
});
