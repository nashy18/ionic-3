import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Global, APIActions, Enums } from '../../providers/config/contsants';

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {

  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  private baseURL = Global.BaseAPIURL;
  
  constructor(public http: HttpClient) {
    console.log('Hello HttpServiceProvider Provider');
  }

  post(req) {debugger

    return this.http.post(
      this.baseURL + req.action, req.body, this._options)
  }

  get(req) {debugger

   return this.http.get(this.baseURL + req.action)
 }
}
