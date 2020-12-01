import { Component, OnInit } from '@angular/core';
import { ChallengeRating } from 'src/app/models/ChallenegRating';
import { ChallengeRatingCollection } from 'src/app/models/ChallengeRatingCollection';
import { Monster } from 'src/app/models/monster';
import { Stats } from 'src/app/models/stats';
import { ChallengeRatingService } from 'src/app/services/challenge-rating.service';
import { MonsterGeneratorService } from 'src/app/services/monster-generator.service';

@Component({
  selector: 'app-monster-generator',
  templateUrl: './monster-generator.component.html',
  styleUrls: ['./monster-generator.component.css']
})
export class MonsterGeneratorComponent implements OnInit {

  public monster: Monster;
  public healthRange: any;
  public challengeRatings: ChallengeRating[];
  public minHealth: number;
  public maxHealth: number;
  public dcrIndex:number;
  public ocrIndex:number;
  public crIndex:number;
  public minDamage: number;
  public maxDamage: number;

  constructor(private challengeRatingService: ChallengeRatingService,
    private monsterGeneratorService: MonsterGeneratorService) { }

  ngOnInit(): void {
    
    this.challengeRatings = [];
    this.dcrIndex = 0;
    this.ocrIndex = 0;
    this.crIndex = 0;

    this.monster = this.monsterGeneratorService.monster;
    this.challengeRatingService.getChallengeRatings().subscribe(
      (data: ChallengeRating[]) => {
        this.challengeRatings = data;
      });
  }

  public update($event): void {
    this.updateCR();
    this.updateAttackBonus();
    this.updateHealthRange();
    this.updateDamage();
    this.updateAC();
  }

  private updateCR() {
    this.crIndex = Math.trunc((+this.ocrIndex + +this.dcrIndex)/2);
    this.monster.ocr = this.challengeRatings[this.ocrIndex].rating;
    this.monster.dcr = this.challengeRatings[this.dcrIndex].rating;
    let total = +this.monster.ocr + +this.monster.dcr;
    let rawCr = total/2;

    this.monster.cr = this.challengeRatings[this.crIndex].displayName;

  }

  private updateAttackBonus():void {
    this.monster.attackBonus = this.challengeRatings[this.crIndex].attackBonus;
  }

  private updateAC(){
    this.monster.ac = this.challengeRatings[this.crIndex].ac;
  }

  private updateHealthRange(): void{
    this.minHealth = this.challengeRatings[this.dcrIndex].minHitpoints;
    this.maxHealth = this.challengeRatings[this.dcrIndex].maxHitpoints;
  }

  private updateDamage(): void{
    this.minDamage = this.challengeRatings[this.ocrIndex].minDamage;
    this.maxDamage = this.challengeRatings[this.ocrIndex].maxDamage;
  }
}
