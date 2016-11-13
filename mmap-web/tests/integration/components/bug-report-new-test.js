import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bug-report-new', 'Integration | Component | bug report new', {
  integration: true
});

test('should add submitted data to store', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bug-report-new}}`);

  assert.equal(this.$('input').length, 1, 'it has input field');
  this.$('input').val('test');
  keyEvent($('input'),'keypress',13).then(function(){
    // assert.equal()
  });

});
