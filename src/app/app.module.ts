import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ProfilesComponent } from './profiles/profiles.component';
import { environment } from "environments/environment";
import { UserLevelService } from "./userlevel.service";
import { UserlevelComponent } from './userlevel/userlevel.component';


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        ProfilesComponent,
        UserlevelComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ROUTING
    ],
    providers: [
        { provide: 'API_URL', useValue: environment.apiUrl },
        UserLevelService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
