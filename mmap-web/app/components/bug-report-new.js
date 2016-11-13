import Ember from 'ember';

export default Ember.Component.extend({
  actions : {
    newBugReport(){
      let title = this.get('value');
    }
  }
});
