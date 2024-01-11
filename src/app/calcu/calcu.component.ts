import { Component, } from '@angular/core';

interface Boton {
  valor: string;
  accion?: () => void;
  parametro?: string;
}

@Component({
  selector: 'app-calcu',
  templateUrl: './calcu.component.html',
  styleUrls: ['./calcu.component.css']
})
export class CalcuComponent {
  pantalla: string = '';
  
  botones: Boton[] = [
    { valor: 'CE', accion: () => this.borrarEntrada() },
    { valor: 'C', accion: () => this.borrarTodo() },
    { valor: '7', accion: () => this.agregarCaracter('7') },
    { valor: '8', accion: () => this.agregarCaracter('8') },
    { valor: '9', accion: () => this.agregarCaracter('9') },
    { valor: '/', accion: () => this.agregarOperador('/') },
    { valor: '4', accion: () => this.agregarCaracter('4') },
    { valor: '5', accion: () => this.agregarCaracter('5') },
    { valor: '6', accion: () => this.agregarCaracter('6') },
    { valor: '*', accion: () => this.agregarOperador('*') },
    { valor: '1', accion: () => this.agregarCaracter('1') },
    { valor: '2', accion: () => this.agregarCaracter('2') },
    { valor: '3', accion: () => this.agregarCaracter('3') },
    { valor: '-', accion: () => this.agregarOperador('-') },
    { valor: '0', accion: () => this.agregarCaracter('0') },
    { valor: '.', accion: () => this.agregarCaracter('.') },
    { valor: '=', accion: () => this.calcularResultado() },
    { valor: '+', accion: () => this.agregarOperador('+') },
  ];

  manejarAccion(boton: Boton): void {
    if (boton.accion) {
      boton.accion();
    }
  }

  agregarCaracter(caracter: string): void {
    this.pantalla += caracter;
  }

  borrarUltimoCaracter(): void {
    this.pantalla = this.pantalla.slice(0, -1);
  }

  borrarEntrada(): void {
    if (this.pantalla.length > 0) {
      this.pantalla = this.pantalla.slice(0, -1);
    }
  }

  borrarTodo(): void {
    this.pantalla = '';
  }

  agregarOperador(operador: string): void {
    this.pantalla += operador;
  }

  calcularResultado(): void {
    try {
      this.pantalla = eval(this.pantalla);
    } catch (error) {
      this.pantalla = 'Error';
    }
  }
}