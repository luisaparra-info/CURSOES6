class Vehiculo {
    constructor(marca, modelo, precio, km) {
      this._modelo = modelo;
      this._marca = marca;
      this._precio = precio;
      this._km = km;
    }
  
    get modelo() {
      return this._modelo;
    }
  
    set modelo(value) {
      this._modelo = value;
    }
  
    get marca() {
      return this._marca;
    }
  
    set marca(value) {
      var marcas = ["SEAT", "MERCEDES", "AUDI", "OPEL", "FORD"];
      if (marcas.includes(value.toUpperCase()))  
        this._marca = value;
      else this._marca= "SIN DEFINIR"
    }
  
    get precio() {
      return this._precio;
    }
  
    set precio(value) {
      this._precio = value;
    }
  
    get km() {
      return this._km;
    }
  
    set km(value) {
      this._km = value;
    }
  
    mostrarMarcaModelo() {
      console.log(this.marca + ' ' + this.modelo);
    }
  
    sumaKm(km) {
      if (km >= 0) {
        this.km += km;
      }
    }
  }
  
  
  