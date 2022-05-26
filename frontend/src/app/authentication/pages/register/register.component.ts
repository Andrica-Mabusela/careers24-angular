import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  years: number[] = []

  ngOnInit(): void {
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

}
