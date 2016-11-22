import Ember from 'ember';

export default Ember.Component.extend({
  isDone : false,
  isEdit : false,
  init(){
    this._super(...arguments);
    this.isDone = this.get('issue').get('done');
  },

  keyDown(e){
    if(e.keyCode === 13){//enter
      let putAction = this.get('putAction');
      let issue = this.get('issue');

      issue.data.title = this.$('input.edit').val();

      putAction(issue);//controller.issue.js
      this.$('input.edit').blur();
    }
  },
  actions:{
    toggleDone(){
      this.toggleProperty('isDone');
    },
    toggleEdit(){
      this.toggleProperty('isEdit');
      if(this.isEdit){
        Ember.run.scheduleOnce('afterRender',this,function(){
          this.$('input.edit').focus();
        });
      }
    },
    deleteIssue(){
      let deleteIssue = this.get('deleteIssue');
      let id = this.get('issue').get('id');

      deleteIssue(id);
    }
  }
});
