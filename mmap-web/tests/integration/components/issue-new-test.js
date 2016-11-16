import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import RSVP from 'rsvp';

moduleForComponent('issue-new', 'Integration | Component | issue new', {
  integration: true
});

test('should clear input after submit', function(assert) {

  this.on('postIssue',(val)=>{
    if(val !== ''){
      return RSVP.resolve('200');
    }
  });

  this.render(hbs`{{issue-new postAction=(action 'postIssue')}}`);

  assert.equal(this.$('input').length, 1, 'it has input field');
  this.$('input').val('Hello Mmap!');
  assert.equal(this.$('input').val(), 'Hello Mmap!','its value is "Hello Mmap!"');
  this.$('input').trigger($.Event('keydown',{keyCode :13}));
  assert.equal(this.$('input').val(), '','Empty Value');

});
