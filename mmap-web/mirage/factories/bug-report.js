import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  // id (i){return `${i}`},
  // type : 'bug-report',
  // attributes :{
  //   title(i) {return `Test Title ${i}`;},
  //   done : false,
  //   date : new Date(),
  //   user(i) {return `Guest User ${i}`;}
  // }
  title(i) {return `Test Title ${i}`;},
  done : false,
  date : new Date(),
  user(i) {return `Guest User ${i}`;}
  // name(i) { return `Person ${i}`; },
  // age: 28,
  // admin: false,
  // avatar(i) { return faker.internet.avatar(); }
});
