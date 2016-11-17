import Ember from 'ember';

export default Ember.Controller.extend({
  descSorting:['date:desc'],
  descIssues: Ember.computed.sort('model','descSorting'),
  actions: {
    postIssue(title){
      if(title !== ''){
        return this.get('store').createRecord('issue',{title:title});
      }
    }
  }
});
