import { Component, OnInit } from '@angular/core';

import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Rx';



class Member{
  name: string;
  role: string;
  description: string;
} 


@Component({
  moduleId: module.id,
  selector: 'app-about',

  templateUrl: 'about.component.html',
  
  styleUrls: ['about.component.css', '../../assets/css/animate.css']
})


export class AboutComponent implements OnInit {

  private jsonUrl = 'app/about';

  constructor(private http: Http) {

      /** the imported js files */
      System.import('../assets/bootstrap/js/wow.js');
      System.import('../assets/bootstrap/js/wow.min.js');
      System.import('../../assets/js/retina-1.1.0.js');

    }

  getTeamMembers (): Observable<Member[]> {
            return this.http.get(this.jsonUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }  



  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  ngOnInit() {
  }

}
