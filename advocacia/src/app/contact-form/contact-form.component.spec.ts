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
  telefone: string ='';
  assunto: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {

    if (this.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/)) {
      alert("mensagem enviada com sucesso!");
      console.log('Formulário enviado:', {
        name: this.name,
        telefone: this.telefone,
        assunto: this.assunto,
        email: this.email,
        message: this.message,
        
      });
    } else {
      alert('Por favor, corrija seu e-mail');
    }
  }
    // Exibe uma mensagem no console apenas como exemplo
  
  
}
