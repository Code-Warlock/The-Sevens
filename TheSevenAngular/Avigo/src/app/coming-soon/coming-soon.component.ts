import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit,OnDestroy {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.footerHeightEvent.emit(true);
  }

  ngOnDestroy() {
    this.messageService.footerHeightEvent.emit(false);
  }

}
