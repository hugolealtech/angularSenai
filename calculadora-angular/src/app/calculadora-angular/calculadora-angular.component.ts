import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import necessário para ngModel

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  num1: number | null = null;
  num2: number | null = null;
  resultado: number | null = null;
  mensagem: string = '';

  calcular(operacao: string) {
    if (this.num1 === null || this.num2 === null) {
      this.mensagem = 'Por favor, preencha os dois números!';
      return;
    }

    this.mensagem = ''; // Limpa a mensagem

    switch (operacao) {
      case 'soma':
        this.resultado = this.num1 + this.num2;
        break;
      case 'subtracao':
        this.resultado = this.num1 - this.num2;
        break;
      case 'multiplicacao':
        this.resultado = this.num1 * this.num2;
        break;
      case 'divisao':
        if (this.num2 === 0) {
          this.mensagem = 'Divisão por zero não é permitida!';
          this.resultado = null;
        } else {
          this.resultado = this.num1 / this.num2;
        }
        break;
    }
  }

  limpar() {
    this.num1 = null;
    this.num2 = null;
    this.resultado = null;
    this.mensagem = '';
  }
}
