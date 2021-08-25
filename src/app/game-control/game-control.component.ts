import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output("start") startGame = new EventEmitter<{ newNumber: number }>();

  incrementingNumber: number = 0;
  interval;
  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(()=>{
      this.doSomething();
    }, 1000);
  }

  doSomething(){
    this.incrementingNumber += 1;
      this.startGame.emit({ newNumber: this.incrementingNumber });
  }

  onStopGame() {
    if(this.interval)
      clearInterval(this.interval);
  }
}
