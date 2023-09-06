import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  listOfPlaces = [
    {
      name: "Maldivs",
      location: "North Pole",
      imageUrl: "./assets/maldivs.jpg"
    },
    {
      name: "Goa",
      location: "South Pole",
      imageUrl: "./assets/goa.jpg"
    },
    {
      name: "New York City",
      location: "United States",
      imageUrl: "./assets/new-york.jpeg"
    },
    {
      name: "Paris",
      location: "France",
      imageUrl: "./assets/paris.jpg"
    },
    {
      name: "Tokyo",
      location: "Japan",
      imageUrl: "./assets/tokyo.jpeg"
    },
    {
      name: "Sydney",
      location: "Australia",
      imageUrl: "./assets/sydney.jpeg"
    }
      
  ]
  ngOnInit() {
  }

}
