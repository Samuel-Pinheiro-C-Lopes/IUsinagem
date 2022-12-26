import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-torneamento',
  templateUrl: './torneamento.component.html',
  styleUrls: ['../calculum.component.css']
})
export class TorneamentoComponent {

  @Input() calcIndex?:number;
  formulaArr:string[] = [];

  getCalcNumber(index:number|undefined) {
    if (typeof index === "number") {
      return index + 1;
    }else{
      return "ERROR";
    }
  }

  deleteFormula(num: number) {
    this.formulaArr.splice(num, 1);
  }


  formulas:string[] = ["Velocidade de corte vc (m/min)", "Velocidade de corte vc (pés/min)", 
  "Velocidade de corte vc (pés/min)", "Velocidade do fuso n (rpm)", "Taxa de remoção de metal Q (cm3/min)", 
  "Taxa de remoção de metal Q (pol3/min)", "Potência líquida Pc (kW)", "Potência líquida Pc (HP)", 
  "Tempo de usinagem Tc (min)"];

  Vc?:number;
  Dm?:number;
  n?:number;
  Q?:number;
  ap?:number;
  Fn?:number;
  Pc?:number;
  Kc?:number;
  Tc?:number;
  Im?:number;

  onOptionSelected (optionSelected: {option:string}) {
    this.formulaArr.push(optionSelected.option);
}

  calculator(num:number) {
    if (num === 0) {
      if (this.Dm != undefined && this.n != undefined) {
        this.Vc = (this.Dm * 3,14159 * this.n)/1000;
      }
    }
    if (num === 1) {
      if (this.Dm != undefined && this.n != undefined) {
        this.Vc = (this.Dm * 3,14159 * this.n)/12;
      }
    }
    if (num === 2) {
      if (this.Vc != undefined && this.Dm != undefined) {
        this.n = (this.Vc * 1000)/(3.14159 * this.Dm);
      }
    }
    if (num === 3) {
      if (this.Vc != undefined && this.Dm != undefined) {
        this.n = (this.Vc * 12)/(3.14159 * this.Dm);
      }
    }
    if (num === 4) {
      if (this.Vc != undefined && this.ap != undefined && this.Fn != undefined) {
        this.Q = this.Vc * this.ap * this.Fn;
      }
    }
    if (num === 5) {
      if (this.Vc != undefined && this.ap != undefined && this.Fn != undefined) {
        this.Q = this.Vc * this.ap * this.Fn * 12;
      }
    }
    if (num === 6) {
      if (this.Vc != undefined && this.ap != undefined && this.Fn != undefined && this.Kc != undefined) {
        this.n = (this.Vc * this.ap * this.Fn * this.Kc)/(60 * Math.pow(10, 3));
      }
    }
    if (num === 7) {
      if (this.Vc != undefined && this.ap != undefined && this.Fn != undefined && this.Kc != undefined) {
        this.n = (this.Vc * this.ap * this.Fn * this.Kc)/(33 * Math.pow(10, 3));
      }
    }
    if (num === 8) {
      if (this.Im != undefined && this.n != undefined && this.Fn != undefined) {
        this.Tc = this.Im/(this.Fn * this.n);
      }
    }
  }

  constructor() { }

}
