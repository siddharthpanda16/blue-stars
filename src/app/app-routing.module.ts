import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {FixturesComponent} from './fixtures/fixtures.component';
import {NewsComponent} from './news/news.component';
import {MoreComponent} from './more/more.component';
import {PlayersComponent} from './players/players.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'more',component:MoreComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'fixtures',component:FixturesComponent},
  {path: 'news',component:NewsComponent},
  {path: 'players',component:PlayersComponent},
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
