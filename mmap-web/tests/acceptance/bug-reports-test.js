import { test } from 'qunit';
import moduleForAcceptance from 'mmap-web/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | bug reports');

test('visiting /bug-reports', function(assert) {

  visit('/bug-reports');

  andThen(function() {
    assert.equal(currentURL(), '/bug-reports');
  });
});


test('should list available bug reports.', function (assert) {
  server.createList('bug-report', 3);
  visit('/bug-reports');

  andThen(function(){
    assert.equal(find('#bug-reports li.bug-report').length,3,'should see three items');
  });
});

test('should list descending', function (assert) {

});
