import { Component, OnInit } from '@angular/core';


@Component({

  moduleId: module.id,
  selector: 'app-header',

  templateUrl: 'header.component.html',
  
  styleUrls: ['header.component.css', '../../assets/css/media-queries.css', '../../assets/css/style.css', '../../assets/css/animate.css']

})


export class HeaderComponent{

    labels: string[]= ["About us", "Contact us", "What we do"];
  
    atTheHeader_phrase = `We have been working very hard to create the new version of our course.
                                    It comes with a lot of new features, easy to follow videos and images. Check it out now!`;
    atTheHeader_title = `Our <strong>New Course</strong> is Ready`;
  
  
  constructor() { 
  
  /** import external js files to the project */ 
  System.import('../assets/js/scripts.js');
  System.import('../assets/bootstrap/js/bootstrap.js');
  System.import('../assets/bootstrap/js/bootstrap.min.js');
  System.import('../assets/bootstrap/js/wow.js');
  System.import('../assets/bootstrap/js/wow.min.js');
  System.import('../assets/bootstrap/js/placeholder.js');
}

  ngOnInit() {
  }

}
