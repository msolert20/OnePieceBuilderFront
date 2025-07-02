import { Routes } from '@angular/router';
import { CardSearchComponent } from './components/card-search/card-search.component';
import { DeckListComponent } from './components/deck-list/deck-list.component';
import { OptionsMenuComponent } from './options-menu/options-menu.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'card-search', component: CardSearchComponent},
    {path: 'deck-list', component: DeckListComponent},
    {path: 'options-menu', component: OptionsMenuComponent},
];
 