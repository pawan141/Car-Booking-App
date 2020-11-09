import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceComponent } from './price/price.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { CarSizeComponent } from './car-size/car-size.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'car-size', component: CarSizeComponent },
  { path: 'price', component: PriceComponent },
  { path: 'services', component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }







