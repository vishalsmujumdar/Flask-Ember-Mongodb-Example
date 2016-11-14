export default function(server) {
  server.createList('bugReports',10);
  server.create('bugReports',{done:true});
}
