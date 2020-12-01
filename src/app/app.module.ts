import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonsterGeneratorComponent } from './components/monster-generator/monster-generator.component';
import { FormsModule } from '@angular/forms';
import { AbilitiesComponent } from './components/partials/abilities/abilities.component';
import { RatingTableComponent } from './components/partials/rating-table/rating-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MonsterGeneratorComponent,
    AbilitiesComponent,
    RatingTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
