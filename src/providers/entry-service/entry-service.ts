import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/do';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/*
  Generated class for the EntryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EntryServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello EntryServiceProvider Provider');
  }

  /*createEntry(url) {

    return this.http.post(url)
    .do((res: Response) => console.log(res))
    .map((res: Response) => res.json())
  }*/

  /*getCity(url) {

    let apiUrl = url+'city';
    this.http.get(url)
      .toPromise()
      .then(res => {

        console.log(res.toString())
        return res.toString();
      });
  }*/

  getCity(url: String): Observable<String> {debugger

    let apiUrl = url+'/city';

    return this.http.get(apiUrl)
      .map(res => {
        return res.toString();
      });
}



}
