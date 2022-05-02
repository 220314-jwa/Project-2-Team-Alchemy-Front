import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-restaurant-rating',
  templateUrl: './restaurant-rating.component.html',
  styleUrls: ['./restaurant-rating.component.css']
})
export class RestaurantRatingComponent implements OnInit {

  @Input()
  ratingValue!: number;
  @Input()
  maxValue!: number;
  @Input()
  readOnly!: boolean;


  constructor() {
    //Don't do logic
    //Setting variables
   }
   

  ngOnInit(): void {
    //Do logic 
    if(this.ratingValue > this.maxValue){
      this.ratingValue = this.maxValue
    }
  }

  getValue(){
    console.log(this.ratingValue);
  }

  updateRating(event: number){
    if(this.readOnly) return;
    this.ratingValue = event;
  }

}
