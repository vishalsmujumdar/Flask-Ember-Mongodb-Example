import DS from 'ember-data';

export default DS.Model.extend({
  title : DS.attr('string'),
  done : DS.attr('boolean'),
  date : DS.attr('date'),
  user : DS.attr()// //DS.belongsTo('user')
});
