import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title(i) {return `Test Title ${i}`;},
  done : false,
  date : new Date(),
  user(i) {return `Guest User ${i}`;}
});
