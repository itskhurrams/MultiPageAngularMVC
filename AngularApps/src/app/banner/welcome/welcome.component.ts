import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
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
    this.welcomeMessage = "This is webComponent exported from root Angular App."
  }
  ngOnDestroy(): void {
    if (this.timer){
      clearTimeout(this.timer);
    }
  }

}
