import { Component } from "@angular/core";

@Component({
    selector: "app-rosqueamento",
    templateUrl: "rosqueamento.component.html",
    styleUrls: ['../calculum.component.css'],
})
export class RosqueamentoComponent {

    formulaArr:string[] = [];

    formulas:string[] = ["Penetração Radial, corte/passe"];

    apx?: number;
    ap?: number;
    nap?: number;
    Y?: number;

    constructor () { }

    onOptionSelected (optionSelected: {option:string}) {
        this.formulaArr.push(optionSelected.option);
    }

    calculator(num: number) {
        if(num === 0) {
            if (this.ap != undefined && this.nap != undefined && this.Y != undefined) {
                this.apx = (this.ap * Math.sqrt(this.Y))/(Math.sqrt(this.nap - 1));
            }
        }
    }

}