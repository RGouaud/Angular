import { Component, OnInit } from '@angular/core';
import { Cd } from 'src/models/cd';

@Component({
  selector: 'app-liste-cds',
  templateUrl: './liste-cds.component.html',
  styleUrls: ['./liste-cds.component.scss']
})
export class ListeCDsComponent implements OnInit {
  listecd!: Cd[];

  ngOnInit(): void {

    this.listecd = [
      {
        id: 1,
        title : "The Dark Side of the Moon",
        author : "Pink Floyd",
        price : 12.99,
        thumbnail : "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
        dateRelease : new Date(1973, 3, 1),
        quantity : 255,
        onSale : true
      },
      {
        id : 2,
        title : "The Wall",
        author : "Pink Floyd",
        price : 12.99,
        thumbnail : "https://upload.wikimedia.org/wikipedia/commons/b/b1/The_Wall_Cover.svg",
        dateRelease : new Date(1979, 11, 1),
        quantity : 10,
        onSale : true
      },
      {
        id : 3,
        title : "Wish You Were Here",
        author : "Pink Floyd",
        price : 12.99,
        thumbnail : "https://upload.wikimedia.org/wikipedia/tr/6/63/Pink_floyd_wish_you_were_here.jpg",
        dateRelease : new Date(1975, 9, 1),
        quantity : 10,
        onSale : true
      },
      {
        id : 4,
        title : "Doolitle",
        author : "Pixies",
        price : 12.99,
        thumbnail : "https://upload.wikimedia.org/wikipedia/en/6/6b/Pixies-Doolittle.jpg",
        dateRelease : new Date(1989, 4, 1),
        quantity : 10,
        onSale : true
      }
    ];
  }
}
