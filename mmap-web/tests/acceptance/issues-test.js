import { test } from 'qunit';
import moduleForAcceptance from 'mmap-web/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | issues');

test('visiting /issues', function(assert) {

  visit('/issues');

  andThen(function() {
    assert.equal(currentURL(), '/issues');
  });
});


test('should list available issues.', function (assert) {
  server.createList('issue', 3);
  visit('/issues');

  andThen(function(){
    assert.equal(find('#issues li.issue').length,3,'should see three items');
  });
});

test('should prepend new issue to the list ', function (assert) {
  server.createList('issue', 3);
  visit('/issues');

  andThen(function(){
    let count = find('li.issue').length;

    assert.equal(find('#issues li.issue').length, 3, 'it has three issue items');
    assert.equal(find('input.issue-new').length, 1, 'it has input field');

    fillIn('input.issue-new','Hello Mmap!');

    keyEvent('input', 'keydown', 13).then(function() {
      assert.equal(find('li.issue').length, count+1,'should append one more issue');
    });
  })

});

test('should list descending', function (assert) {

});
