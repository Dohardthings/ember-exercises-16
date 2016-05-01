import Ember from 'ember';

export default Ember.Controller.extend({
  addPerson() {
  const attributes = {
    firstName: this.firstName,
    lastName: this.lastName,
    address: this.address,
    phoneNumber: this.phoneNumber,
  };
  fetch(`https://tiny-tn.herokuapp.com/collections/dm-people`,
  {
    method: `POST`,
    headers: {
      Accept: `application/json`,
      'Content-Type': `application/json`,
    },
    body: JSON.stringify(attributes),
  }).then((res) => res.json())


  },
});
