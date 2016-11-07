import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return fetch('https://api.github.com/users/monsteronfire')
      .then(function(response) {
        return response.json();
      });
  }
});
