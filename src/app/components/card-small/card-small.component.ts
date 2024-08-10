import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-small',
  templateUrl: './card-small.component.html',
  styleUrl: './card-small.component.scss'
})
export class CardSmallComponent {

  
  @Input() ieBorder : boolean =false;

  getBoder(){

    return this.ieBorder ? 'border-gree' : 'no-border';
  }



}
