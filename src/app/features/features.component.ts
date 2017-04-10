import { Component, OnInit } from '@angular/core';

class feature{
	header: string;
	description: string;
}

class moreFeatures{
	header: string;
	 body: string;
}


@Component({
  moduleId: module.id,
  selector: 'app-features',
  templateUrl: 'features.component.html',
  styleUrls: ['features.component.css', '../../assets/css/media-queries.css', '../../assets/typicons/typicons.css', '../../assets/typicons/typicons.min.css', '../../assets/bootstrap/css/bootstrap-theme.css', '../../assets/bootstrap/css/bootstrap-theme.min.css', '../../assets/bootstrap/css/bootstrap.css', '../../assets/bootstrap/css/bootstrap.min.css', '../../styles.css']
})


export class FeaturesComponent implements OnInit {

		Features_header: string='What\'s included';
 
		features: feature[]=[
			{
			header:'Easy To Use' , 
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.'
			},

	 		{
	 		header:'Responsive Design' ,
	 		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.'
	 		},
	 
	 		{
	 		header:'Bootstrap Engine', 
	 		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.'
	 		},
	 		
	 		{header:'Lots Of Videos', 
	 		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.'
	 		}, 

	 		{
	 		header:'Mobile App', 
	 		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.'
	 		}, 

	 		{
	 		header:'Big Community', 
	 		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.'
	 		}
	 		];

	 /** the tycons names */
	 		
	 /**	typcns: string[]=['typcn-eye-outline', 'typcn-thumbs-ok', 'typcn-cog-outline', 'typcn-video-outline', 'typcn-device-phone', 'typcn-group-outline'];			*/

	 more_features_header: string = 'More Features';


	 	moreFeats: moreFeatures[]=[{header: 'header 1', body: 'body 1'}, {header: 'header 1', body: 'body 1'}];


	 	/** the always beatiful section */
	 	AlwaysBeautiful: string = `<h3>Ut wisi enim ad minim</h3>

                            <p class="medium-paragraph">
                                Lorem ipsum dolor sit amet, <span class="blue">consectetur adipisicing</span> elit, 
                                sed do eiusmod tempor incididunt ut labore et. Ut wisi enim ad minim veniam, quis nostrud.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.
                                Ut wisi enim ad minim veniam, quis nostrud. 
                                Exerci tation ullamcorper suscipit <span class="blue">lobortis nisl</span> ut aliquip ex ea commodo consequat. 
                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl. 
                            </p>`;


       /** CallToAction: string = `<div class="call-to-action-container section-container 		               			section-container-image-bg">
            						<div class="container">
                						<div class="row">
                    						<div class="col-sm-12 call-to-action section-description wow fadeInLeftBig">
                        						<h2>Call to action</h2>
                        				<div class="divider-1 wow fadeInUp"><span></span></div>
                        					<p>
                            					Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut 
                            					aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud.
                        					</p>
                    				</div>
                				</div>
                				<div class="row">
                    				<div class="col-sm-12 section-bottom-button wow fadeInUp">
                        		<a class="btn btn-link-1 scroll-link" href="#pricing">Choose your package</a>
                    						</div>
                						</div>
            						</div>
       						 	</div>`;
*/
  constructor() {
  			System.import('../../assets/bootstrap/js/bootstrap.js');
   }

  ngOnInit() {
  }

}
