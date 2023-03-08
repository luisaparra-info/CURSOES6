class Vuelo {
    constructor(origen, destino, fecha) {
      this._origen = origen;
      this._destino = destino;
      this._fecha= fecha;
     
    }
    get origen(){
        return this._origen;
    }
    get destino(){
        return this._destino;
    }
    get fecha(){
        return this._fecha;
    }
    get activa(){
        return this._activa;
    }
    get vuelos(){
        return this._vuelos
    }
}
export { Vuelo };