import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MainComponent } from "./main/main.component";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { ProtectedComponent } from "./protected/protected.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";


@NgModule({
    declarations: [MainComponent,
        LoginComponent,
        ProtectedComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent
    ],
    imports: [FormsModule, BrowserModule, RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [MainComponent]
})

export class AppModule { }