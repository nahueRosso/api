const express = require('express');
const routerApi = require('./routes');
const cors = require('cors')

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

/////

class MiObjeto{
  constructor(nombre,apellido,edad){
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad
  }
  my(numero){
    return `${this.nombre} ${this.apellido} y tiene ${this.edad}. es el objeto ${numero}`
  }

}




const newObjet = new MiObjeto('nahuel','rojo',24)

for (let i = 0; i < 10; i++) {
  // const element = array[i];
  console.log(newObjet.my(i+1))
  
}





/////


routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port' +  port);
});
