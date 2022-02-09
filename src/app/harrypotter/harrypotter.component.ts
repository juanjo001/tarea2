import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from '../harrypotter.service';

@Component({
  selector: 'app-harrypotter',
  templateUrl: './harrypotter.component.html',
  styleUrls: ['./harrypotter.component.css']
})
export class HarrypotterComponent implements OnInit {

  houses:any;
  constructor(private HarrypotterService:HarrypotterService ){}
  ngOnInit(): void {
      this.getHarrypotter();
  }

  getHarrypotter(){
    this.HarrypotterService.getHarrypotter().subscribe( resp =>{
      console.log(resp);
      this.houses=resp;
      

    })
}
 

}
