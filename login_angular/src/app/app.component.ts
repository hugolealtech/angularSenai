import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ModalBoasVindasComponent } from './modal-boas-vindas/modal-boas-vindas.component';

@Component({
  selector: 'app-root',
  standalone: true, // Indica que o componente é standalone
  imports: [CommonModule, LoginComponent, ModalBoasVindasComponent], // Importando os componentes necessários
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'login-angular';
  mostrarModal: boolean = false;

  mostrarBoasVindas() {
    this.mostrarModal = true;
  }

  fecharModal() {
    this.mostrarModal = false;
  }
}
