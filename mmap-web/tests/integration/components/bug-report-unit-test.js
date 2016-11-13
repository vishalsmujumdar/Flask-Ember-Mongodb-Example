import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('bug-report-unit', 'Integration | Component | bug report unit', {
  integration: true
});

test('should toggle with done class on click', function(assert) {
  let stubBugReport = Ember.Object.create({
    title : 'test1',
    done : true,
    date : new Date(),
    user : 'guest1'
  });
  this.set('bug', stubBugReport);
  this.render(hbs`{{bug-report-unit bug=bug}}`);
  assert.equal(this.$('li.bug-report.done').length,0,'initially rendered undone');
  this.$('li.bug-report').click();
  assert.equal(this.$('li.done').length,1,'addClass done after click');
  this.$('li.bug-report.done').click();
  assert.equal(this.$('li.done').length,0,'removeClass done after second click');
});

test('should show edited report after modifying ', function (assert) {
});

test('should remove report if delete button is clicked', function (assert) {
});
