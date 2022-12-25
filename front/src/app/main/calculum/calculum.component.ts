import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-calculum',
    templateUrl: 'calculum.component.html',
    styleUrls: ['calculum.component.css'],
})
export class CalculumComponent {

    @Input() calcType?:string;
    @Input() calcIndex?:number;

    @Output() componentDeleted = new EventEmitter<{index?:number}>()

    componentDeletion(num?: number) {
        this.componentDeleted.emit({
            index: num
        })
    }

}