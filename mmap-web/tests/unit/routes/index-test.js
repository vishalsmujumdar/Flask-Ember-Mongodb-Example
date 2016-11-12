import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index', 'Unit | Route | index');

test('should transition to bug report', function(assert) {
  let route = this.subject({
    replaceWith(routeName){
      assert.equal(routeName,'bug-reports','replace with route name bug-reports');
    }
  });
  route.beforeModel();
});
