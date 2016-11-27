import Ember from 'ember';

export default Ember.Controller.extend({
  descSorting:['date:desc'],
  descIssues: Ember.computed.sort('model','descSorting'),
  actions: {
    postIssue(title){
      if(title !== ''){
        let issue = this.get('store').createRecord('issue',{title:title});
        return issue.save();
      }
    },
    putIssue(param){
      let title = param.get('title');
      if(title !== ''){
        return this.get('store').find('issue',param.id).then((issue)=> {
          issue.set('title', title);
          issue.save();
        });
      }
    },
    deleteIssue(param){
      if(param !== ''){
        return this.get('store').find('issue',param).then((issue)=>{
          issue.deleteRecord();
          issue.save();
        });
      }
    }
  }
});
