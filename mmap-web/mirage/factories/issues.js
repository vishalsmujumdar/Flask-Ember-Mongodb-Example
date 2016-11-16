import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title(i){return faker.lorem.sentence() + ` ${i+1}`;},
  done : false,
  date : new Date(),
  user(i){return faker.name.findName() + ` ${i+1}`;},
});
