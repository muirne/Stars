import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyskyComponent } from './mysky/mysky.component';
import { KonstelacjaComponent } from './konstelacja/konstelacja.component';
import { StarsComponent } from './stars/stars.component';

const routes: Routes = [
  { path: 'mysky', component: MyskyComponent  },
  { path: 'constellation', component: KonstelacjaComponent  },
  { path: 'stars', component: StarsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
