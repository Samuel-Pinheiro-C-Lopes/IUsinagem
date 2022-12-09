import { Component } from "@angular/core";

@Component({
    selector: "app-main",
    templateUrl: "main.component.html",
    styleUrls: ["main.component.css"],
})
export class MainComponent {
    contentType:number = 2;

    currentContent:string = 'fresamento';

    onContentToggled(text: { textContent: string }) {
        this.currentContent = text.textContent;
    }

}