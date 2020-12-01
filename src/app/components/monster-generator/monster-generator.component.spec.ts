import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterGeneratorComponent } from './monster-generator.component';

describe('MonsterGeneratorComponent', () => {
  let component: MonsterGeneratorComponent;
  let fixture: ComponentFixture<MonsterGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
