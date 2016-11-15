import Ember from 'ember';

export default Ember.Component.extend({
  isDone : false,
  init(){
    this._super(...arguments);
    this.isDone = this.get('bug').get('done');
  },
  actions : {
    toggleDel(){
      this.toggleProperty('isDone');
    }
  }
});
