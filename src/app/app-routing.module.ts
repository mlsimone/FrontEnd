import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SaveBoilerPlateCodeComponent } from './save-boiler-plate-code/save-boiler-plate-code.component';
import { ShowAllPageComponent } from './show-all-page/show-all-page.component';
import { AddItemPageComponent } from './add-item-page/add-item-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'saved', component: SaveBoilerPlateCodeComponent },
  { path: 'showAll', component: ShowAllPageComponent },
  { path: 'addItem', component: AddItemPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
