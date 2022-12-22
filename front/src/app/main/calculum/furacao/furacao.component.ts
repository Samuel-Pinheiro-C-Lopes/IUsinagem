import { Component } from '@angular/core';

@Component({
    selector: 'app-furacao',
    templateUrl: 'furacao.component.html',
    styleUrls: ['../calculum.component.css']
})
export class FuracaoComponent {

    //Length = 19;
    formulas:string[] = ["Velocidade de Corte, (Vc) m/min", "Velocidade de corte, (vc) pés/min", 
    "Velocidade do fuso, (n) rpm", "	Velocidade do fuso, (n) rpm", "Taxa de penetração, (vf) m/min", 
    "Taxa de penetração, (vf) pol/min", "Avanço por rotação, (fn) mm/rot", "	Avanço por rotação, (fn) pol./rot.", 
    "Taxa de remoção de metal, (Q) cm3/min", "Taxa de remoção de metal, (Q) pol3/min", "Potência líquida, (Pc) kW", 
    "Potência líquida, (Pc) HP", "Torque, lbf Nm", "Torque, lbf-pés", 
    "Força de avanço, (Ff) N", "	Força de avanço, (Ff) pés/min",
    "Tempo de usinagem, (Tc) min"];

    formulaArr:string[] = [];

    Vc?:number;
    Dc?:number;
    n?:number;
    Vf?:number;
    Fn?:number;
    Q?:number;
    Pc?:number;
    Kc?:number;
    Mc?:number;
    Ff?:number;
    Kr?:number;
    Tc?:number;
    Im?:number;

    onOptionSelected (optionSelected: {option:string}) {
        this.formulaArr.push(optionSelected.option);
    }

    calculator(num:number) {
        if (num === 0) {
            if (this.Dc != undefined && this.n != undefined) {
                this.Vc = (this.Dc * 3.14159 * this.n)/1000;
            }
        }
        if (num === 1) {
            if (this.Dc != undefined && this.n != undefined) {
                this.Vc = (this.Dc * 3.14159 * this.n)/12;
            }  
        }
        if (num === 2) {
            if (this.Vc != undefined && this.Dc != undefined) {
                this.n = (this.Vc * 1000)/(3.14159 * this.Dc);
            }  
        }
        if (num === 3) {
            if (this.Vc != undefined && this.Dc != undefined) {
                this.n = (this.Vc * 12)/(3.14159 * this.Dc);
            } 
        }
        if (num === 4) {
            if (this.Fn != undefined && this.n != undefined) {
                this.Vf = this.Fn * this.n;
            } 
        }
        if (num === 5) {
            if (this.Fn != undefined && this.n != undefined) {
                this.Vf = this.Fn * this.n;
            } 
        }
        if (num === 6) {
            if (this.Vf != undefined && this.n != undefined) {
                this.Fn = this.Vf/this.n;
            } 
        }
        if (num === 7) {
            if (this.Vf != undefined && this.n != undefined) {
                this.Fn = this.Vf/this.n;
            }   
        }
        if (num === 8) {
            if (this.Dc != undefined && this.Fn != undefined && this.Vc != undefined) {
                this.Q = (this.Dc * this.Fn * this.Vc)/4;
            }   
        }
        if (num === 9) {
            if (this.Dc != undefined && this.Fn != undefined && this.Vc != undefined) {
                this.Q = this.Dc * this.Fn * this.Vc * 3;
            }  
        }
        if (num === 10) {
            if (this.Dc != undefined && this.Fn != undefined && this.Vc != undefined && this.Kc != undefined) {
                this.Pc = (this.Fn * this.Vc * this.Dc * this.Kc)/(240 * Math.pow(10,3));
            }  
        }
        if (num === 11) {
            if (this.Dc != undefined && this.Fn != undefined && this.Vc != undefined && this.Kc != undefined) {
                this.Pc = (this.Fn * this.Vc * this.Dc * this.Kc)/(132 * Math.pow(10,3));
            }  
        }
        if (num === 12) {
            if (this.Pc != undefined && this.n != undefined) {
                this.Mc = (this.Pc * 30 * Math.pow(10,3))/(3.14159 * this.n);
            }  
        }
        if (num === 13) {
            if (this.Pc != undefined && this.n != undefined) {
                this.Mc = (this.Pc * 16501)/(3.14159 * this.n);
            }  
        }
        if (num === 14) {
            if (this.Kc != undefined && this.Dc != undefined && this.Fn != undefined && this.Kc != undefined && this.Kr != undefined) {
                this.Ff = 0.5 * this.Kc * (this.Dc/2) * this.Fn * (Math.sin(this.Kr * (Math.PI/180)))
            }   
        }
        if (num === 15) {
            if (this.Kc != undefined && this.Dc != undefined && this.Fn != undefined && this.Kc != undefined && this.Kr != undefined) {
                this.Ff = 0.5 * this.Kc * (this.Dc/2) * this.Fn * (Math.sin(this.Kr * (Math.PI/180)))
            }   
        }
        if (num === 16) {
            if (this.Im != undefined && this.Vf != undefined) {
                this.Tc = this.Im/this.Vf;
            }
        }
    }
}