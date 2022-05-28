import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  years: number[] = []
  seekerButtons: any;

  ngOnInit(): void {
    this.seekerButtons = document.querySelectorAll('.seeker-btn')
      let baseYear = 1930
      let currentYear = new Date().getFullYear()
      let difference = currentYear - baseYear

      for(let index = 0; index <= difference; index++) {
          if( baseYear <= currentYear ){
              this.years.push(baseYear)
              baseYear++
          } else{
            break
          }
      }

      this.years = this.years.reverse()
      console.log(this.years)
  }


  selectExperience(event: Event){
    console.log(event.target)
      this.seekerButtons.forEach( (btn: any) => {
          if(btn == event.target) {
            btn.classList.add('employment-active')
          } else {
            btn.classList.remove('employment-active')
          }    
      })
  }

}
