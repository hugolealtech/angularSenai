import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CarouselComponent } from "./carousel/carousel.component.spec";
import {FAQComponent} from "./faq/faq.component"
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactFormComponent } from "./contact-form/contact-form.component.spec";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CarouselComponent,
    AboutUsComponent,
    ContactFormComponent,
    FAQComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'advocacia';
}
