import { test } from 'qunit';
import moduleForAcceptance from 'mmap-web/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | issues');

test('visiting /issues', function(assert) {

  visit('/issues');

  andThen(function() {
    assert.equal(currentURL(), '/issues');
  });
});


test('should list available bug reports.', function (assert) {
  server.createList('issue', 3);
  visit('/issues');

  andThen(function(){
    assert.equal(find('#issues li.issue').length,3,'should see three items');
  });
});

test('should list descending', function (assert) {

});
