import Ember from 'ember';

export default Ember.Component.extend({
  keyDown: function(e){
    if(e.keyCode === 13){//enter
      let title = this.get('value');
      let postAction = this.get('postAction');
      postAction(title);//controller.issue.js
      this.set('value','');
    }
  }
});
