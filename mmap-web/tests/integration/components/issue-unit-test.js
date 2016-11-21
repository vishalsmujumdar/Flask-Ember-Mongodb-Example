import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('issue-unit', 'Integration | Component | issue unit', {
  integration: true
});

let stubIssue = Ember.Object.create({
  title : 'test1',
  done : false,
  date : new Date(),
  user : 'guest1'
});

test('should toggle with done class on click', function(assert) {
  this.set('issue', stubIssue);
  this.render(hbs`{{issue-unit issue=issue}}`);

  assert.equal(this.$('li.issue.done').length,0,'initially rendered undone');
  this.$('li.issue input[type=checkbox]').click();
  assert.equal(this.$('li.done').length,1,'addClass done after click');
  this.$('li.issue input[type=checkbox]').click();
  assert.equal(this.$('li.done').length,0,'removeClass done after second click');
});

test('should show initially rendered done if it is done ', function (assert) {
  stubIssue.done = true;

  this.set('issue', stubIssue);
  this.render(hbs`{{issue-unit issue=issue}}`);

  assert.equal(this.$('li.issue.done').length,1,'initially rendered done');
});

test('toggleEdit action should work when user dbclick issue and focus-out input', function (assert) {
  this.set('issue', stubIssue);
  this.render(hbs`{{issue-unit issue=issue}}`);

  assert.notEqual(this.$('li.issue:eq(0)').length,0,'issues are more than one');

  this.$('li.issue:eq(0)').dblclick();
  assert.equal(this.$('li.issue:eq(0) input.edit').length,1,'should show input for edit');

  this.$('li.issue:eq(0) input.edit').focusout();
  assert.equal(this.$('li.issue:eq(0) input.edit').length,0,'first input should be hidden');
});

test('should show delete button when admin user hover issue', function (assert) {
});
