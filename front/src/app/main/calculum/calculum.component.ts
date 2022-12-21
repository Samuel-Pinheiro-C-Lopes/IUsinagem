import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-calculum',
    templateUrl: 'calculum.component.html',
    styleUrls: ['calculum.component.css'],
})
export class CalculumComponent {

    @Input() calcType?:string;

}