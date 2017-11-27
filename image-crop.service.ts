import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ImageCropService {
  cropStartEvent = new EventEmitter<any>();
  private image:string;
  constructor() { }

  start(inputID:string){
    this.cropStartEvent.emit(inputID);
  }

  setImage(image:string){
    this.image = image;
  }

  getImage(){
    return this.image;
  }
}
