import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private apiURL = `https://api.publicapis.org/categories`;

  constructor(private http: HttpClient) { }

  getData(): Promise<any> {
    return this.http.get(`${this.apiURL}`).toPromise();
  }

}
