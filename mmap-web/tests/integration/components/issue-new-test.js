import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('issue-new', 'Integration | Component | issue new', {
  integration: true
});

test('should prepend new issue to the list ', function (assert) {
  // this.render(hbs`{{bug-report-new}}`);
  // let count = this.$('li.bug-report').length;
  //
  // assert.equal(this.$('input.bug-report-new').length, 1, 'it has input field');
  // this.$('input.bug-report-new').val('Hello Mmap!');
  //
  // let e = jQuery.Event("keydown");
  // e.which = 13;
  // this.$('input.bug-report-new').trigger(e);
  //
  // assert.equal(this.$('li.bug-report').length, count+1,'should append one more bug-report');
});

test('should clear input after submit', function(assert) {

  this.render(hbs`{{issue-new}}`);

  assert.equal(this.$('input').length, 1, 'it has input field');
  this.$('input').val('Hello Mmap!');
  assert.equal(this.$('input').val(), 'Hello Mmap!','its value is "Hello Mmap!"');

  let e = jQuery.Event("keydown");
  e.which = 13;
  this.$('input').trigger(e);

  assert.equal(this.$('input').val(), '','Empty Value');//TODO....

});
