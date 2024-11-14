import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    // Exibe uma mensagem no console apenas como exemplo
    console.log("Formulário enviado:", this.name, this.email, this.message);
  }
}
