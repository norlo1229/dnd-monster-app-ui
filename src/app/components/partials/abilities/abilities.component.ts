import { Component, OnInit } from '@angular/core';
import { Monster } from 'src/app/models/monster';
import { MonsterGeneratorService } from 'src/app/services/monster-generator.service';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {

  public monster:Monster;

  constructor(private monsterGeneratorService: MonsterGeneratorService) {}

  ngOnInit(): void {
    this.monster = this.monsterGeneratorService.monster;
  }
}
