import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// our feature module
import { TeslaBatteryModule } from './tesla-battery/tesla-battery.module';

// our app component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // include our TeslaBatteryModule
    TeslaBatteryModule
  ],
  providers: [],
  // bootstrap the AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
