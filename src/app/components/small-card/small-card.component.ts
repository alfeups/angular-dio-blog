import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit{

  @Input()
  photoCover:string = "https://m.media-amazon.com/images/S/pv-target-images/b5e02a9dba88c2abd50700d3e18ac0a7413ab383a0bc4d1d4305485ddc68fe25._AC_SL792_.jpg"
  @Input()
  cardTitle:string = "Book"
  @Input()
  cardDescription:string = "New Dune book"
  @Input()
  id:string ="0"

  constructor(){}

  ngOnInit(): void{}

}
