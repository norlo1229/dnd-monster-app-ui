import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChallengeRating } from '../models/ChallenegRating';
import { ChallengeRatingCollection } from '../models/ChallengeRatingCollection';

@Injectable({
  providedIn: 'root'
})
export class ChallengeRatingService {

  constructor(private httpClient: HttpClient) {
  
   }

  public getChallengeRatings(): Observable<ChallengeRating[]> {

    let collection = this.httpClient.get<ChallengeRating[]>("assets/data/cr.json");
    console.log(collection);
    return collection;
  }

  public getMinDamage
}
