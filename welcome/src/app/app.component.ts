import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from "./welcome/welcome.component";
import { BotaoComponent } from "./botao/botao.component";
import { FormsComponent } from "./forms/forms.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[

    RouterOutlet,
    WelcomeComponent,
    BotaoComponent,
    FormsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'welcome';
}
