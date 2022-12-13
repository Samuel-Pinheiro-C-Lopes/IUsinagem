import { Component } from "@angular/core";
import { MatSelect } from "@angular/material/select";

@Component({
    selector: "app-main",
    templateUrl: "main.component.html",
    styleUrls: ["main.component.css"],
})
export class MainComponent {
    contentType:number = 2;

    selected:string = "h1"

    currentDisplay:string = 'home';

    onContentToggled(text: { textContent: string }) {
        this.currentDisplay = text.textContent;
    }

    onDisplayChanged(display: {newDisplay: string}) {
        this.currentDisplay = display.newDisplay;
    }

}