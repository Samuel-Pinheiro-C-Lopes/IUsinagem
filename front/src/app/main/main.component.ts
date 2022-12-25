import { Component } from "@angular/core";

@Component({
    selector: "app-main",
    templateUrl: "main.component.html",
    styleUrls: ["main.component.css"],
})
export class MainComponent {

    optionsNeeded:string[] = ["Torneamento", "Fresamento", "Furação", "Rosqueamento"];

    calculumArr:string[] = []

    contentType:number = 2;

    selected:string = "h1"

    currentDisplay:string = 'home';

    onContentToggled(text: { textContent: string }) {
        this.currentDisplay = text.textContent;
    }

    onDisplayChanged(display: {newDisplay: string}) {
        this.currentDisplay = display.newDisplay;
    }

    onOptionSelected (optionSelected: {option:string}) {
        this.currentDisplay = 'none';
        this.calculumArr.push(optionSelected.option);
    }

    onComponentDeleted (i: {index?:number}) {
        if (typeof i.index === "number") {
            this.calculumArr.splice(i.index, 1)
        }
    }

}