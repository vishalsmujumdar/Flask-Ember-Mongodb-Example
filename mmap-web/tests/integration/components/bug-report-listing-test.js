import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bug-report-listing', 'Integration | Component | bug report listing', {
  integration: true
});

test('should toggle done attribute wrapping <del> tag', function(assert) {
  let stubBugReport = Ember.Object.create({
    title : 'test1',
    done : true,
    date : new Date(),
    user : 'guest1'
  })
  this.set('bugReportObj', stubBugReport);
  // this.render(hbs`{{bug-report-listing }}`);
  //
  // assert.equal(this.$().text().trim(), '');
  //
  // // Template block usage:
  // this.render(hbs`
  //   {{#bug-report-listing}}
  //     template block text
  //   {{/bug-report-listing}}
  // `);
  //
  // assert.equal(this.$().text().trim(), 'template block text');
});
