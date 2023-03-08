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
    const section = document.querySelector('section');
    
    for (const vuelo of vuelos) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');

      myH2.textContent = vuelo.name;
      myPara1.textContent = `Origen: ${vuelo.origen}`;
      myPara2.textContent = `Destino: ${vuelo.destino}`;
      myPara3.textContent = `Fecha: ${vuelo.fecha}`;

      

      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);

      section.appendChild(myArticle);
    }
  }

  

  let agencia = Agencia.crearAgencia()
  header(agencia);
  vuelos(agencia.vuelos);

  console.log(agencia);

