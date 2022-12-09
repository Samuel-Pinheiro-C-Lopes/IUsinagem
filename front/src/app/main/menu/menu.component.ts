import { Component, EventEmitter, Output} from "@angular/core";

@Component({
    selector: "app-menu",
    templateUrl: "menu.component.html",
    styleUrls:["menu.component.css"],
})
export class MenuComponent {
    
    // @Output() contentToggled = new EventEmitter<{newContent: string}>();

    // onToggleContent(text: string) {
    //     this.contentToggled.emit({
    //         newContent: text
    //     });
    // }

    menuOptions:string[] = ['Geral', 'Fresamento', 'Torneamento', 'Rosqueamento']

    @Output() contentToggled = new EventEmitter<{textContent: string}>();

    onToggleContent(textContent: string) {
        this.contentToggled.emit({
            textContent: textContent
        })
    }





















    menuOpened:boolean = false;



    constructor(){ }

    // onDisplayChange() {
    //     this.displayChanged.emit({
            
    //     })
    // }


    
    
    // Try I: 
    // menuItems_map = new Map<boolean, string>([[false, 'Torneamento'],[false, 'Fresamento'], [false, 'Rosqueamento']]);
    // menuItems_arr:string[] = this.menuItems_map.values();

    // Try II:
    // menuItems: MenuItems = {
    //     torneamento: false,
    //     fresamento: false,
    //     rosqueamento: false,

    //     toggler: function (item: string) {
    //         Object.keys(this).forEach(itemName => {
    //             if (item === itemName) Object.defineProperty(this, `${itemName}`, {
    //                 value: true,
    //                 writable: true,
    //             })
    //         });
    //     }
    // };

    // Try III
    // menuTopics:string[] = ['Fresamento', 'Torneamento', 'Rosqueamento'];
    // menuTopicsActive:boolean[] = [false, false, false];

    // topicActiveChanger():void {
    //     this.menuTopics.forEach((el, i) => {

    //     });
    //     this.menuTopicsActive[1] = true;
    // }

    // menuItems_arr:string[] = Object.keys(this.menuItems);
}

