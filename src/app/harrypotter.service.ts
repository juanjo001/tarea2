import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HarrypotterService {

  urlharrypotter='http://hp-api.herokuapp.com/api/characters/house/hufflepuff';

  constructor(private http:HttpClient) { }

  getHarrypotter():Observable<any>{
    return this.http.get(this.urlharrypotter);

  }
}
