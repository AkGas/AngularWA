import { Component, OnInit } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'app-testimonials',
  templateUrl: 'testimonials.component.html',
  styleUrls: ['testimonials.component.css', '../../assets/css/media-queries.css', '../../assets/css/form-elements.css', '../../assets/css/media-queries.css', '../../assets/css/style.css', '../../assets/css/animate.css', '../../assets/css/bootstrap/bootstrap.css']
})


export class TestimonialsComponent implements OnInit {

  testimonials_header: string = 'Testimonials';

/** every testimon is a tuple of a string <company-nom-id>, a string <text-of-testimonial> and string <link-to-company> */
/** here we have an array of testimonial texts */
	
	testimonials: string[] = ['It is testimonial 1', 'It is testimonial 2', 'It is testimonial 3', 'It is testimonial 4']; 
	
  constructor() {

    
    System.import('../../assets/js/scripts.js');
    System.import('../../assets/js/wow.js');
    System.import('../../assets/js/wow.min.js');
    System.import('../../assets/bootstrap/js/bootstrap.js');
    System.import('../../assets/bootstrap/js/bootstrap.min.js');


   }

  ngOnInit() {
  
  }

}
