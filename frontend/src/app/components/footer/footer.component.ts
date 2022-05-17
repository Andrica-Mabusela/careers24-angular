import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dropContent(event: Event){
        const sectionContent: any = (event.target as HTMLButtonElement).parentElement;

        // sectionContent.nextElementSibling.classList.toggle('show-content')

  }

}
