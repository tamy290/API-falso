const { faker } = require('@faker-js/faker');
const express = require ('express');
const app = express();


class Usuario{
  constructor(){
      this.id = faker.string.uuid();
      this.primerNombre = faker.person.firstName();
      this.apellido = faker.person.lastName();
      this.telefonoelefono = faker.phone.number();
      this.email=faker.internet.email();
      this.contraseña= faker.internet.password();
  }
}

class Empresa{
  constructor(){
      this.id = faker.string.uuid();
      this.nombre = faker.company.companyName();
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
  return res.status(200).json(Usuario)
});


app.get('/api/empresa/new', (req, res) => {
  return res.status(200).json(Empresa);
});

app.get('/api/usuario/empresa', (req, res) => {
  return res.status(200).json({ usuario: new Usuario(), empresa: new Empresa() });
});

app.listen(8080, () => {
  console.log('Servidor iniciado en http://localhost:8080');
});