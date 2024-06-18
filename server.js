const express = require('express');
const app = express();
const { faker } = require('@faker-js/faker');

class Usuario{
  constructor(){
      this._id = faker.datatype.int();
      this.primerNombre = faker.person.firstName();
      this.apellido = faker.person.lastName();
      this.telefonoelefono = faker.phone.numberumber();
      this.email=faker.internet.email();
      this.contraseña= faker.internet.password();
  }
}

class Empresa{
  constructor(){
      this._id = faker.datatype.int();
      this.nombre = faker.nombre.companyName();
      this.direccion.faker.location.street();
      };
  }



//http://localhost:8080/api/users/new
app.get('/api/users/new', (req, res) => {
  console.log('Nuevo usuario creado')
  res.json(new Usuario());
});


app.get('/api/empresa/new', (req, res) => {
  res.json(new Empresa());
});

app.get('/api/usuario/empresa', (req, res) => {
  res.json({ usuario: new Usuario(), empresa: new Empresa() });
});

app.listen(8080, () => {
  console.log('Servidor iniciado en http://localhost:8080');
});