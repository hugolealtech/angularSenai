import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraAngularComponent } from "./calculadora-angular/calculadora-angular.component";
import { FormsModule } from '@angular/forms';
 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [
    RouterOutlet,
    CalculadoraAngularComponent,
    FormsModule 

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculadora de teste';
}

