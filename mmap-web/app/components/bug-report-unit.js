import Ember from 'ember';

export default Ember.Component.extend({
  isDone : false,
  actions : {
    toggleDel(){
      this.toggleProperty('isDone');
    }
  }
});
