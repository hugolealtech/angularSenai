import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Para o uso de [(ngModel)]

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importando FormsModule para usar [(ngModel)]
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario: string = '';
  senha: string = '';
  mensagem: string = '';

  @Output() loginSucesso = new EventEmitter<void>();

  onLogin() {
    if (this.usuario === 'admin' && this.senha === 'cocada') {
      localStorage.setItem('usuario', this.usuario);
      this.loginSucesso.emit(); // Emite evento de sucesso
    } else {
      this.mensagem = 'Usuário ou senha incorretos!';
    }
  }
}
