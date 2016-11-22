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
  });

});

test('should list descending', function (assert) {
  server.create('issue',{title:'one',date:new Date(1479398561000)});
  server.create('issue',{title:'two',date:new Date(1479398562000)});
  server.create('issue',{title:'three',date:new Date(1479398563000)});
  server.create('issue',{title:'fourth',date:new Date(1479398564000)});
  server.create('issue',{title:'fifth',date:new Date(1479398565000)});

  visit('/issues');

  andThen(function(){
    assert.equal(find('#issues li.issue').first().find('span').text().trim(), 'fifth', 'last issue should on top');
    assert.equal(find('#issues li.issue').last().find('span').text().trim(), 'one', 'first issue should at bottom');
  });
});

test('should show edited issue after modifying ', function (assert) {
  server.create('issue',{title:'before'});

  visit('/issues');

  andThen(function(){
    assert.equal(find('li.issue').length,1,'initially li issue rendered');
    assert.equal(find('li.issue input.edit').length,0,'initially input for edit is closed');
    triggerEvent('li.issue', 'dblclick');
  });

  andThen(()=>{
    assert.equal(find('li.issue input.edit').length,1,'should show input for edit');
    assert.equal(find('li.issue input.edit').val(),'before','first value of issue is before');
    fillIn('li.issue input.edit','after');
  });

  andThen(()=>{
    assert.equal(find('li.issue input.edit').val(),'after','should edit input value');
    find('li.issue input.edit').trigger($.Event('keydown',{keyCode :13}));
  });

  andThen(()=>{
    assert.equal(server.db.issues[0].title, 'after','issued should be modified');
    // assert.equal(find('li.issue input.edit').length,0,'should hide input for edit');
    // assert.equal(find('li.issue').text().trim(),'after','issued should be modified');
  });

});

test('should remove issue if delete button is clicked', function (assert) {
  server.create('issue',{title:'trash'});

  visit('/issues');

  assert.equal(server.db.issues.length, 1,'issue was made for test');
  click('li.issue .delete');
  andThen(()=>{
    assert.equal(server.db.issues.length, 0,'issue was deleted');
  });
});
