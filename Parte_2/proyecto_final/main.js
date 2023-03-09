import { Agencia } from './modulos/agencia.js'

  function header(agencia) {
    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');
    myH1.textContent = agencia.tipo;
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = `Agencia: ${agencia.nombre} // Año: ${agencia.anio}`;
    header.appendChild(myPara);
  }

  function vuelos(vuelos) {
    const section = document.querySelector('tbody');
    
    for (const vuelo of vuelos) {
      const myTbody = document.createElement('tr');
      const myPara1 = document.createElement('td');
      const myPara2 = document.createElement('td');
      const myPara3 = document.createElement('td');

      myPara1.textContent = `Origen: ${vuelo.origen}`;
      myPara2.textContent = `Destino: ${vuelo.destino}`;
      myPara3.textContent = `Fecha: ${vuelo.fecha}`;

      myTbody.appendChild(myPara1);
      myTbody.appendChild(myPara2);
      myTbody.appendChild(myPara3);

      section.appendChild(myTbody);
    }
  }

  let agencia = Agencia.crearAgencia()
  header(agencia);
  vuelos(agencia.vuelos);

  console.log(agencia);

