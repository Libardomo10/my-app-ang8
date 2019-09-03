import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { NewListComponent } from './component/new-list/new-list.component';
import { AppRoutingModule } from './app-routing.module';
import { InitComponent } from './component/init/init.component';

@NgModule({
  declarations: [
    AppComponent,
    NewListComponent,
    InitComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
