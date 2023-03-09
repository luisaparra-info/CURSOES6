import { Vuelo} from './vuelo.js'
import data from "./json.js"

class Agencia {
    constructor(tipo, nombre, anio, activa) {
      this._tipo = tipo;
      this._nombre = nombre;
      this._anio= anio;
      this._activa = activa;
      this._vuelos = [];
    }
    get tipo(){
        return this._tipo;
    }
    get nombre(){
        return this._nombre;
    }
    get anio(){
        return this._anio;
    }
    get activa(){
        return this._activa;
    }
    get vuelos(){
        return this._vuelos
    }
    insertarVuelo(vuelo){
        if (vuelo instanceof(Vuelo)){
          this._vuelos.push(vuelo)
        }
    }
   
    static crearAgencia() {
      let info=data.data;
      console.log(info);
      let agencia = new Agencia(info.name, info.agencia,info.anio,info.active);
      console.log(agencia);
      const vuelos = info.vuelos;
      for (const v of vuelos) {
        let vuelo = new Vuelo(v.origen, v.destino, v.fecha);
        agencia.insertarVuelo(vuelo);
      }
      return agencia;
  
  }
}
  
  export { Agencia };