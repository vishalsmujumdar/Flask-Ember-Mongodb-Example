import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    postIssue(title){
      if(title !== ''){
        return this.get('store').createRecord('issue',{title:title});
      }
    }
  }
});
