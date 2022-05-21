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
      for(let index = 0; baseYear <= currentYear; index++ ){
        this.years.push(baseYear)
        baseYear += 1
      }
  }

}
