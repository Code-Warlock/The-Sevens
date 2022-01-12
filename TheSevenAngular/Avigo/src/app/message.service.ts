import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public headerHeightEvent = new EventEmitter<boolean>();
  public footerHeightEvent = new EventEmitter<boolean>();
;
  constructor() { }
}
