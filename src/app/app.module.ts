import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppConverterComponent } from './app-converter/app-converter.component';

@NgModule({
  declarations: [AppComponent, AppHeaderComponent, AppConverterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
