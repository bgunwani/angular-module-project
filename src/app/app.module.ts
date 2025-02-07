import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MainComponent } from "./main/main.component";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";


@NgModule({
    declarations: [MainComponent],
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [MainComponent]
})

export class AppModule { }