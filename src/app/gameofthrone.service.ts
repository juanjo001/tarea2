import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameofthroneService {

  urlgamesofthrone='https://thronesapi.com/api/v2/Characters';

  constructor(private http:HttpClient) { }

  getGamesofthrone():Observable<any>{
    return this.http.get(this.urlgamesofthrone);

  }

}
