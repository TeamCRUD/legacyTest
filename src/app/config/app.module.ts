import './polyfills';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HomeComponent} from '../pages/home/home';
import {AboutComponent} from '../pages/about/about';
import {DopeComponent} from '../pages/dope/dope';
import {MooralComponent} from '../pages/mooral/mooral';
import {ViumoComponent} from '../pages/viumo/viumo';
import {UserService} from './user.service';

import {enableProdMode} from '@angular/core';
enableProdMode();

const routing = RouterModule.forRoot([
    { path: '',      component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'dope', component: DopeComponent },
    { path: 'mooral', component: MooralComponent },
    { path: 'viumo', component: ViumoComponent },
]);

@NgModule({
    imports: [BrowserModule,
    		  routing,
    		  HttpModule,
    		  FormsModule,
    		  ReactiveFormsModule],
    declarations: [AppComponent,
    			   AboutComponent,
    			   HomeComponent,
                   DopeComponent,
                   MooralComponent,
                   ViumoComponent],
    providers: [UserService],
    bootstrap: [AppComponent]
})

export class AppModule {}