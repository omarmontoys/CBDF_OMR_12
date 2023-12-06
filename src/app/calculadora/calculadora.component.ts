import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css',
})
export class CalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  sumarNumeros() {
    this.resultado = this.numero1 + this.numero2;
    //alert('Suma de numeros');
  }

  restarNumeros() {
    this.resultado = this.numero1 - this.numero2;
    //alert('Resta de numeros');
  }

  multiplicacionNumeros() {
    this.resultado = this.numero1 * this.numero2;
    //alert('Multiplicar numeros');
  }

  dividirNumeros() {
    if (this.numero2 == 0) alert('No se puede realizar la division');
    else this.resultado = this.numero1 / this.numero2;
    //alert('Dividir numeros');
  }

  iniciarCampos() {
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = 0;
  }
}
