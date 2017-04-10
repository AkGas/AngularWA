import { Component } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TestimonialsComponent } from './testimonials/testimonials.component'; 
import { FeaturesComponent } from './features/features.component'; 



@Component({
  
  moduleId: module.id,
  selector: 'app-root',
  
  templateUrl: 'app.component.html',

  styleUrls: ['app.component.css', '../assets/bootstrap/css/bootstrap.min.css', '../assets/typicons/typicons.min.css', '../assets/css/animate.css', '../assets/css/form-elements.css', '../assets/css/style.css','../assets/css/media-queries.css'],
  
  directives: [AboutComponent, ContactsComponent, FooterComponent, HeaderComponent, TestimonialsComponent, FeaturesComponent]

})


export class AppComponent {
  body = 'main component';
}
