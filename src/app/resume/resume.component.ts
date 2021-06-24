import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(-10%)', opacity: 0}),
          animate('300ms', style({transform: 'translateX(0)', opacity: 1}))
        ])
      ]
    )
  ],
})
export class ResumeComponent implements OnInit {
  currentCard = "start";

  constructor() { }

  ngOnInit(): void {
  }

  switchCard(card: string){
    this.currentCard = card;
  }

}
