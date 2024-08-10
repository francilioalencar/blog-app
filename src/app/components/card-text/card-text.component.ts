import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-text',
  templateUrl: './card-text.component.html',
  styleUrl: './card-text.component.scss'
})
export class CardTextComponent implements OnInit {
  

  @Input() title    : string = "";
  @Input() subTitle : string = "";
  @Input() text     : string = "";
  @Input() img      : string = "";
  
  
  ngOnInit(): void {
    
  }


}
