import { Component, OnInit, ErrorHandler } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.headerHeightEvent.subscribe(b => {
      const header = document.getElementsByTagName('header')[0]
      if (b) {
        header.classList.add('about-header')
        header.classList.add('service-header')
      }
      else{
        header.classList.remove('about-header')
      }
    })
  }

}
