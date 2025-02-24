const {faker} = require('@faker-js/faker');
const boom = require('@hapi/boom');

class UsersService {
  constructor(){
    this.users = [];
    this.generate();
  }

  generate(){
    const limit = 50;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.string.uuid(),
        fullName: faker.person.fullName(),
        sex: faker.person.sex()
      })
    }
  }

  async find(){
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.users);
      }, 300);
    })
  }

  async findUser (id){
    const user = this.users.find(item => item.id === id)
    if (!user) {
          throw boom.notFound('product not found');
    }else{
      return user;
    }
  }

  async delateUser (id){
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = UsersService;
