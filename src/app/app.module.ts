import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

// Routing Module
import { AppRoutingModule } from "./app.routing";
// Layouts
import { MainLayoutComponent } from "./layouts/main-layout.component";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, MainLayoutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
