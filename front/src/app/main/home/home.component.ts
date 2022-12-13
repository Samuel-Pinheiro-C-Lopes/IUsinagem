import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-home",
    templateUrl: "home.component.html",
    styleUrls: ["home.component.css"],
})
export class HomeComponent {

    @Output() displayChanged = new EventEmitter<{newDisplay:string}>()

    onDisplayChange(displayInput:string) {
        this.displayChanged.emit({
            newDisplay: displayInput
        })
    }
}