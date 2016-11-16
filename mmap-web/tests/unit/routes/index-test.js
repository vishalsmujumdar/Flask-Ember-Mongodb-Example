import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index', 'Unit | Route | index');

test('should transition to issues', function(assert) {
  let route = this.subject({
    replaceWith(routeName){
      assert.equal(routeName,'issues','replace with route name issues');
    }
  });
  route.beforeModel();
});
