import { Component } from '@angular/core';

@Component({
  selector: 'app-fresamento',
  templateUrl: './fresamento.component.html',
  styleUrls: ['./fresamento.component.css']
})
export class FresamentoComponent {

  formulaArr:string[] = [];

  formulas:string[] = 
  ['Velocidade de Corte, v(pés/min)', 'Velocidade de Corte, v(m/min)', 
  'Avanço por Rotação, f(pol./rot,)', 'Avanço por Rotação, f(mm/rotação)', 
  'Avanço por Dente, f(pol)', 'Avanço por Dente, f(mm)', 'Taxa de Remoção de Metal, Q (cm/min)', 
  'Taxa de Remoção de Metal, Q (pol/min)', 'Potência Líquida, P(HP)', 'Potência Líquida, P(kW)', 
  'Velocidade do Fuso, n (r/min)', 'Velocidade do Fuso, n (rpm)', 'Avanço de Mesa, v (pol/min)', 
  'Avanço de Mesa, v (mm/min)', 'Torque, M(lbf-pés)', 'Torque, M (Nm)'];

  Vc?:string;
  DCap?: string;
  n?:string;

  

  onOptionSelected (optionSelected: {option:string}) {
    this.formulaArr.push(optionSelected.option);
    this.Vc = optionSelected.option;
}


  constructor() { }

}
