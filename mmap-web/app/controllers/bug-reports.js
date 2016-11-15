import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    postBugReport(title){
      if(title !== ''){
        return this.get('store').createRecord('bug-report',{title:title});
      }
    }
  }
});
