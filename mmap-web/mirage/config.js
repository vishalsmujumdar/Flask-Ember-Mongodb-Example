export default function() {
  this.namespace = '/api';
  this.get('/issues',function(schema){
    return{
      'issue': schema.db.issues
    };
  });
  this.get('/issues/:id', function(schema,request){
    return{
      'issue': schema.db.issues.find(request.params.id)
    };
  });
  this.put('/issues/:id',function(schema,request){
    return{
      'issue': schema.db.issues.update(request.params.id, JSON.parse(request.requestBody).issue)
    };
  });
}

//reference
//http://www.ember-cli-mirage.com/docs/v0.1.x/defining-routes/
//https://hashrocket.com/blog/posts/test-driving-a-stubbed-api-in-ember-with-ember-cli-mirage
