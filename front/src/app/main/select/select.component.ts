import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  imgsSrcs:string[] = [];  

  @Input() label?:string;

  @Input() options?:string[];

  @Output() optionSelected = new EventEmitter<{option:string}>();

  onOptionSelection(choise: string) {
    this.optionSelected.emit({
      option: choise
    })
  }

  selected:string = "";

  constructor() { }

  ngOnInit(): void {

    const length = this.options?.length;

    if (length === 1) {
      for (let i = 0; i < Number(length); i++) {
          this.imgsSrcs.push(`../../../assets/selectImgs/rosqueamento/${i}.jpg`);
      }
    }else if(length === 16){
      for (let i = 0; i < Number(length); i++) {
          this.imgsSrcs.push(`../../../assets/selectImgs/fresamento/${i}.jpg`);
      }
    }else if(length === 9){
      for (let i = 0; i < Number(length); i++) {
          this.imgsSrcs.push(`../../../assets/selectImgs/torneamento/${i}.jpg`);
      }
    }else{
      for (let i = 0; i < Number(length); i++) {
          this.imgsSrcs.push(`../../../assets/selectImgs/furacao/${i}.jpg`);
        }
    }
  }
}


