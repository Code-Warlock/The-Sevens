import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.footerHeightEvent.subscribe(b => {
      const footer = document.getElementsByTagName('footer')[0]
      if (b) {
        footer.classList.add('coming-footer')
        footer.classList.add('sourcing-footer')
      }
      else{
         footer.classList.remove('coming-footer')
         footer.classList.remove('sourcing-footer')
      }
    })
  }

}
