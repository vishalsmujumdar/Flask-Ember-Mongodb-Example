export default function(server) {
  server.createList('issues',10);
  server.create('issues',{done:true});
}
