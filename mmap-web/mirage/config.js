export default function() {
  this.namespace = '/api';
//http://www.ember-cli-mirage.com/docs/v0.1.x/defining-routes/
  this.get('/issues',function(Schema){
    return{
      'issue': Schema.db.issues
    };
  });


  // this.post('/bug-reports', function(store, request) {
  //   var attrs = JSON.parse(request.requestBody)['bug-report'];
  //   var bugReport = store['bug-report'].insert(attrs);
  //   return { 'bug-report': bugReport };
  // });

}
