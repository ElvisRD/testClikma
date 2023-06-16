import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon} from '../../interfaces/types'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  @Input() visible: boolean = false;
  @Input() pokemon?: Pokemon;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  closeDialog(){
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
  
}
