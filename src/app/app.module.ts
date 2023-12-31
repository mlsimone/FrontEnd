import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaveBoilerPlateCodeComponent } from './save-boiler-plate-code/save-boiler-plate-code.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddItemPageComponent } from './add-item-page/add-item-page.component';
import { ShowAllPageComponent } from './show-all-page/show-all-page.component';
import { ItemService } from './item.service';
import { FilehandlerService } from './filehandler.service';
import { ItemAndImageHandlerService } from './item-and-image-handler.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SaveBoilerPlateCodeComponent,
    HomePageComponent,
    AddItemPageComponent,
    ShowAllPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: ItemService }, { provide: FilehandlerService }, { provide: ItemAndImageHandlerService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
