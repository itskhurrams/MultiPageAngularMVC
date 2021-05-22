import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-banner',
  templateUrl: './welcome-banner.component.html',
  styleUrls: ['./welcome-banner.component.css']
})
export class WelcomeBannerComponent implements OnInit,OnDestroy {
  timer: any;
  time: string;
  welcomeMessage: string;
  constructor() { this.time = ''; this.welcomeMessage = '' }
  ngOnInit(): void {
    var setTime = () => {
      var today = new Date();
      this.time = ("0" + today.getHours()).slice(-2) + ":" +
                  ("0" + today.getMinutes()).slice(-2) + ":" +
                  ("0" + today.getSeconds()).slice(-2);
    };
    setTime();
    this.timer = setInterval(setTime, 500);
    this.welcomeMessage = "welCome to MultiPage Web Application."
  }
  ngOnDestroy(): void {
    if (this.timer){
      clearTimeout(this.timer);
    }
  }

}
