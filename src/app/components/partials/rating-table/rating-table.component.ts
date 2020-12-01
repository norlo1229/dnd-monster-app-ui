import { Component, OnInit } from '@angular/core';
import { ChallengeRating } from 'src/app/models/ChallenegRating';
import { ChallengeRatingService } from 'src/app/services/challenge-rating.service';

@Component({
  selector: 'app-rating-table',
  templateUrl: './rating-table.component.html',
  styleUrls: ['./rating-table.component.css']
})
export class RatingTableComponent implements OnInit {

  public index:number;
  public challengeRatings: ChallengeRating[];

  constructor(private challengeRatingService: ChallengeRatingService) { }

  ngOnInit(): void {
    this.index = 0;
    this.challengeRatings = [];

    this.challengeRatingService.getChallengeRatings().subscribe(
      (data: ChallengeRating[]) => {
        this.challengeRatings = data;
      });
  }

  public update(){
    console.log("a");
    this.index = +this.index + 1;
  }
}
