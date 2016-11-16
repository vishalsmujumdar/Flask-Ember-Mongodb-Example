import Ember from 'ember';

export default Ember.Component.extend({
  isDone : false,
  init(){
    this._super(...arguments);
    this.isDone = this.get('issue').get('done');
  },
  actions : {
    toggleDel(){
      this.toggleProperty('isDone');
    }
  }
});
