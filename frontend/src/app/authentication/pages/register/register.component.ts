import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  years: number[] = []
  seekerButtons: any
  hasExperienceArray: any

  ngOnInit(): void {
    this.seekerButtons = document.querySelectorAll('.seeker-btn')
    this.hasExperienceArray = document.querySelectorAll('.experience-btn')
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

            if(btn.classList.contains('employed-btn')) {
              (document.getElementById('employed') as HTMLDivElement).style.display = 'block';
              (document.getElementById('unemployed') as HTMLDivElement).style.display = 'none';
              (document.getElementById('first-time-seeker') as HTMLDivElement).style.display = 'none'

            } else if( btn.classList.contains('unemployed-btn') ){

              (document.getElementById('employed') as HTMLDivElement).style.display = 'none';
              (document.getElementById('unemployed') as HTMLDivElement).style.display = 'block';
              (document.getElementById('first-time-seeker') as HTMLDivElement).style.display = 'none'
            } else {
              (document.getElementById('employed') as HTMLDivElement).style.display = 'none';
              (document.getElementById('unemployed') as HTMLDivElement).style.display = 'none';
              (document.getElementById('first-time-seeker') as HTMLDivElement).style.display = 'block'

            }

          } else {
            btn.classList.remove('employment-active')
          }    
      })
  }


  experienceToggler(event: Event) {
    this.hasExperienceArray.forEach((btn: any) => {
        if( btn == event.target ){
            btn.classList.add('experience-active')
        } else {
            btn.classList.remove('experience-active')
        }
    })
  }

}
