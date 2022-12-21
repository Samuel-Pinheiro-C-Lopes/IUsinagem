import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { MainComponent} from './main/main.component';
import { MenuComponent } from './main/menu/menu.component';
import { FresamentoComponent } from './main/calculum/fresamento/fresamento.component';
import { TorneamentoComponent } from './main/calculum/torneamento/torneamento.component';
import { HomeComponent } from './main/home/home.component';
import { RosqueamentoComponent } from './main/calculum/rosqueamento/rosqueamento.component'
import { FuracaoComponent } from './main/calculum/furacao/furacao.component';
import { CalculumComponent } from './main/calculum/calculum.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectComponent } from './main/select/select.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    FresamentoComponent,
    TorneamentoComponent,
    HomeComponent,
    RosqueamentoComponent,
    FuracaoComponent,
    CalculumComponent,
    SelectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
