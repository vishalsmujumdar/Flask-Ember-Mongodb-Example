import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bug-report-new', 'Integration | Component | bug report new', {
  integration: true
});

test('should add submitted data to store', function(assert) {

  this.render(hbs`{{bug-report-new}}`);

  assert.equal(this.$('input').length, 1, 'it has input field');
  this.$('input').val('test');
  keyEvent($('input'),'keypress',13).then(function(){
    // assert.equal()
  });

});
