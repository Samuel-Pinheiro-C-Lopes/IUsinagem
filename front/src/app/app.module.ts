import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { MainComponent} from './main/main.component';
import { MenuComponent } from './main/menu/menu.component';
import { FresamentoComponent } from './main/fresamento/fresamento.component';
import { TorneamentoComponent } from './main/torneamento/torneamento.component';
import { HomeComponent } from './main/home/home.component';
import { RosqueamentoComponent } from './main/rosqueamento/rosqueamento.component'
import { GeralComponent } from './main/geral/geral.component';
import { CalculumComponent } from './calculum/calculum.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    FresamentoComponent,
    TorneamentoComponent,
    HomeComponent,
    RosqueamentoComponent,
    GeralComponent,
    CalculumComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
