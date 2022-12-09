import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent} from './main/main.component';
import { MenuComponent } from './main/menu/menu.component';
import { FresamentoComponent } from './main/fresamento/fresamento.component';
import { TorneamentoComponent } from './main/torneamento/torneamento.component';
import { HomeComponent } from './main/home/home.component';
import { RosqueamentoComponent } from './main/rosqueamento/rosqueamento.component'
import { GeralComponent } from './main/geral/geral.component';
import { CalculumComponent } from './calculum/calculum.component';


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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
