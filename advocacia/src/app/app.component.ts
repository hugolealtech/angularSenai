import { Component } from '@angular/core';

import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CarouselComponent } from "./carousel/carousel.component.spec";
import { FAQComponent} from "./faq/faq.component"
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactFormComponent } from "./contact-form/contact-form.component.spec";
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatExpansionModule,
    CommonModule,
    HeaderComponent,
    CarouselComponent,
    AboutUsComponent,
    ContactFormComponent,
    FAQComponent,
    FooterComponent

 
    
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nextStep() : void {

  }
  title = 'advocacia';
}




