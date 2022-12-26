import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fresamento',
  templateUrl: './fresamento.component.html',
  styleUrls: ['../calculum.component.css']
})
export class FresamentoComponent implements OnInit {

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


  //length = 15
  formulas:string[] = 
  ['Velocidade de Corte, v(pés/min)', 'Velocidade de Corte, v(m/min)', 
  'Avanço por Rotação, f(pol./rot,)', 'Avanço por Rotação, f(mm/rotação)', 
  'Avanço por Dente, f(pol)', 'Avanço por Dente, f(mm)', 'Taxa de Remoção de Metal, Q (cm/min)', 
  'Taxa de Remoção de Metal, Q (pol/min)', 'Potência Líquida, P(HP)', 'Potência Líquida, P(kW)', 
  'Velocidade do Fuso, n (r/min)', 'Velocidade do Fuso, n (rpm)', 'Avanço de Mesa, v (pol/min)', 
  'Avanço de Mesa, v (mm/min)', 'Torque, M(lbf-pés)', 'Torque, M (Nm)'];

  Vc?:number;
  DCap?: number;
  n?:number;
  Fn?:number;
  Vf?:number;
  Fz?:number;
  ZEFF?:number;
  AP?:number;
  ae?:number;
  Q?:number;
  Pc?:number;
  Kc?:number;
  Mc?:number;

  onOptionSelected (optionSelected: {option:string}) {
    this.formulaArr.push(optionSelected.option);
}

  ngOnInit(): void {

  }

  calculator (num:number) {
    if (num === 0) {
      if (this.DCap != undefined && this.n != undefined) {
        this.Vc = (3.14159 * this.DCap * this.n)/(12);
      }
    }
    if (num === 1) {
      if (this.DCap != undefined && this.n != undefined) {
        this.Vc = (3.14159 * this.DCap * this.n)/(12);
      }
    }
    if (num === 2) {
      if (this.Vf != undefined && this.n != undefined) {
        this.Fn = this.Vf/this.n;
      }
    }
    if (num === 3) {
      if (this.Vf != undefined && this.n != undefined) {
        this.Fn = this.Vf/this.n;
      }
    }
    if (num === 4) {
      if (this.Vf != undefined && this.n != undefined && this.ZEFF != undefined) {
        this.Fz = this.Vf/(this.n * this.ZEFF);
      }
    }
    if (num === 5) {
      if (this.Vf != undefined && this.n != undefined && this.ZEFF != undefined) {
        this.Fz = this.Vf/(this.n * this.ZEFF);
      }
    }
    if (num === 6) {
      if (this.Vf != undefined && this.ae != undefined && this.AP != undefined) {
        this.Q  = (this.AP * this.ae * this.Vf)/1000;
      }
    }
    if (num === 7) {
      if (this.Vf != undefined && this.ae != undefined && this.AP != undefined) {
        this.Q = this.AP * this.ae * this.Vf;
      }
    }
    if (num === 8) {
      if (this.Vf != undefined && this.ae != undefined && this.AP != undefined && this.Kc != undefined) {
        this.Pc = (this.AP * this.ae * this.Vf * this.Kc)/(396 * Math.pow(10, 3));
      }
    }
    if (num === 9) {
      if (this.Vf != undefined && this.ae != undefined && this.AP != undefined && this.Kc != undefined) {
        this.Pc = (this.AP * this.ae * this.Vf * this.Kc)/(60 * Math.pow(10, 6));
      }
    }
    if (num === 10) {
      if (this.Vc != undefined && this.DCap != undefined) {
        this.n = (this.Vc * 1000)/(3.14159 * this.DCap);
      }
    }
    if (num === 11) {
      if (this.Vc != undefined && this.DCap != undefined) {
        this.n = (this.Vc * 12)/(3.14159 * this.DCap);
      }
    }
    if (num === 12) {
      if (this.n != undefined && this.Fz != undefined && this.ZEFF != undefined) {
        this.Vf = this.Fz * this.n * this.ZEFF;
      }
    }
    if (num === 13) {
      if (this.n != undefined && this.Fz != undefined && this.ZEFF != undefined) {
        this.Vf = this.Fz * this.n * this.ZEFF;
      }
    }
    if (num === 14) {
      if (this.Pc != undefined && this.n != undefined) {
        this.Mc = (this.Pc * 16501)/(3.14159 * this.n);
      }
    }
    if (num === 15) {
      if (this.Pc != undefined && this.n != undefined) {
        this.Mc = (this.Pc * 30 * Math.pow(10, 3))/(3.14159 * this.n);
      }
    }
  }

  constructor() { }

}
