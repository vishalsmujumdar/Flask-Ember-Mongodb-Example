import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('issue-unit', 'Integration | Component | issue unit', {
  integration: true
});

test('should toggle with done class on click', function(assert) {
  let stubIssue = Ember.Object.create({
    title : 'test1',
    done : false,
    date : new Date(),
    user : 'guest1'
  });
  this.set('issue', stubIssue);
  this.render(hbs`{{issue-unit issue=issue}}`);
  assert.equal(this.$('li.issue.done').length,0,'initially rendered undone');
  this.$('li.issue').click();
  assert.equal(this.$('li.done').length,1,'addClass done after click');
  this.$('li.issue.done').click();
  assert.equal(this.$('li.done').length,0,'removeClass done after second click');
});

test('should show initially rendered done if it is done ', function (assert) {
  let stubIssue = Ember.Object.create({
    title : 'test1',
    done : true,
    date : new Date(),
    user : 'guest1'
  });
  this.set('issue', stubIssue);
  this.render(hbs`{{issue-unit issue=issue}}`);
  assert.equal(this.$('li.issue.done').length,1,'initially rendered done');
});

test('should show input field when user dbclick issue', function (assert) {
});

test('should show delete button when admin user hover issue', function (assert) {
});
