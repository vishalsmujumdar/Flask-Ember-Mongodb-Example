import DS from 'ember-data';

export default DS.Model.extend({
  //primaryKey : '_id',
  title : DS.attr('string'),
  done : DS.attr('boolean',{
    defaultValue : false
  }),
  date : DS.attr('date',{
    defaultValue : new Date()
  }),
  user : DS.attr('string',{
    defaultValue : 'guest'
  })// //DS.belongsTo('user')
});
