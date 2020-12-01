import { Injectable, OnInit } from '@angular/core';
import { Monster } from '../models/monster';
import { Stats } from '../models/stats';

@Injectable({
  providedIn: 'root'
})
export class MonsterGeneratorService{

  public monster: Monster;

  constructor() {
    this.newMonster();
  }

  public newMonster(): Monster {
    this.monster = new Monster();
    this.monster.stats = new Stats();

    return this.monster;
  }
}
