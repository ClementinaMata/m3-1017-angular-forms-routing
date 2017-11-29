import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { FrasesListComponent } from './frases-list/frases-list.component';


const routes:Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'frases/:nombre', component: FrasesListComponent }
];


export {routes};
