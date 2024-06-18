const { faker } = require('@faker-js/faker');
const express = require ('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


class User{
  constructor(){
      this.id = faker.string.uuid();
      this.primerNombre = faker.person.firstName();
      this.apellido = faker.person.lastName();
      this.telefono = faker.phone.number();
      this.email=faker.internet.email();
      this.contraseña= faker.internet.password();
  }
}

class Company{
  constructor(){
      this.id = faker.string.uuid();
      this.nombre = faker.company.name();
      this.direccion = {
        calle: faker.location.streetAddress(),
        ciudad: faker.location.city(),
        estado: faker.location.state(),
        codigoPostal: faker.location.zipCode(),
        pais: faker.location.country(),
      };
  }
}



//http://localhost:8080/api/users/new
app.get('/api/users/new', (req, res) => {
  return res.status(200).json(User)
});


app.get('/api/companies/new', (req, res) => {
  return res.status(200).json(company);
});

app.get('/api/user/company', (req, res) => {
  return res.status(200).json({ user: new User(), company: new Company() });
});

app.listen(8080, () => {
  console.log('Servidor iniciado en http://localhost:8080');
});