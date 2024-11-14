import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-boas-vindas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-boas-vindas.component.html',
  styleUrls: ['./modal-boas-vindas.component.css'],
})
export class ModalBoasVindasComponent {
  @Output() fechar = new EventEmitter<void>();

  onFechar() {
    this.fechar.emit(); // Emite evento para fechar o modal
  }
}
