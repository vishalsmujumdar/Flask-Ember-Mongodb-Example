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
});

test('should prepend new report to the list ', function (assert) {
});

test('should show edited report after modifying ', function (assert) {
});

test('should add class indicating deleted text when click report', function (assert) {
});

test('should remove report if delete button is clicked', function (assert) {
});
