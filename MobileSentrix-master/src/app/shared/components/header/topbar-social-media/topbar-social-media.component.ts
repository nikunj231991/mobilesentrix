import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-topbar-social-media',
  templateUrl: './topbar-social-media.component.html',
  styleUrls: ['./topbar-social-media.component.scss']
})
export class TopbarSocialMediaComponent implements OnInit {

  ticks = 0;
  
  minutesDisplay: number = 10;
  hoursDisplay: number = 10;
  secondsDisplay: number = 0;

  sub: Subscription;

  ngOnInit() {
      this.startTimer();
  }

  private startTimer() {

      let timer = Observable.timer(1, 1000);
      this.sub = timer.subscribe(
          t => {
              this.ticks = t;
              this.secondsDisplay = this.getSeconds(this.ticks);
              this.minutesDisplay = this.getMinutes(this.ticks);
              this.hoursDisplay = this.getHours(this.ticks);
          }
      );
  }

  private getSeconds(ticks: number) {
      return this.pad(ticks % 60);
  }

  private getMinutes(ticks: number) {
       return this.pad((Math.floor(ticks / 60)) % 60);
  }

  private getHours(ticks: number) {
      return this.pad(Math.floor((ticks / 60) / 60));
  }

  private pad(digit: any) { 
      return digit <= 9 ? '0' + digit : digit;
  }
}
