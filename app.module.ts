import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CompareDirective } from './model/comapre.directive'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { DetailsComponent } from './details/details.component';


const appRoutes : Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'details', component: DetailsComponent },
  { path: '', redirectTo: '/signup', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    DetailsComponent,
    CompareDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
