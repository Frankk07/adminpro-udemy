import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Tutas
import { APP_ROUTES } from './app.routes';

// Módulos
import { PagesModule } from './pages/pages.modulo';

// temporal
import { FormsModule } from '@angular/forms';

// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    PagesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
