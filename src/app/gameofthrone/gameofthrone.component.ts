import { Component, OnInit } from '@angular/core';
import { GameofthroneService } from '../gameofthrone.service';

@Component({
  selector: 'app-gameofthrone',
  templateUrl: './gameofthrone.component.html',
  styleUrls: ['./gameofthrone.component.css']
})
export class GameofthroneComponent implements OnInit {

  characters:any;
  constructor(private GameofthroneService:GameofthroneService ){}
  ngOnInit(): void {
      this.getGameofthrone();
  }

  getGameofthrone(){
    this.GameofthroneService.getGamesofthrone().subscribe( resp =>{
      console.log(resp);
      this.characters=resp;
      

    })
  }
}
