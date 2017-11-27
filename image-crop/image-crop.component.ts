import { Component, OnInit, ViewEncapsulation, OnDestroy, EventEmitter, Input } from '@angular/core';
declare var $:any;
import { ImageCropService } from '../image-crop.service';

@Component({
  selector: 'app-image-crop',
  templateUrl: './image-crop.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ImageCropComponent implements OnInit {
  model:any = {};
  imageService:ImageCropService;

  @Input() minWidth;
  @Input() minHeight;
  @Input() maxWidth;
  @Input() maxHeight;
  @Input() boxWidth;
  @Input() boxHeight;
  @Input() selectedWidth;
  @Input() selectedHeight;
  @Input() selectedX;
  @Input() selectedY;


  constructor(private imageCropService : ImageCropService) {
    this.imageService = imageCropService;
  }

  ngOnInit() {
    this.imageCropService.cropStartEvent.subscribe((inputID ) => {
      this.showimagepreview(inputID);
    });
  }

  onDestroy(){
    this.imageCropService.cropStartEvent.unsubscribe();
  }

  showimagepreview(inputID){
    var input = $("#"+inputID);
    if (input[0] && input[0].files[0])
    {
      var filerdr = new FileReader();
      filerdr.onload = function(e:any) {
          $('#image').attr('src', e.target.result);
      };
      filerdr.readAsDataURL(input[0].files[0]);
    }

    $('#image').Jcrop({
      setSelect: [ this.selectedX,this.selectedY,this.selectedWidth,this.selectedHeight ],
      aspectRatio: 1,
      maxSize: [this.maxWidth, this.maxHeight],
      minSize: [this.minHeight, this.maxHeight],
      boxWidth: this.boxWidth, boxHeight: this.boxHeight,
      onSelect: this.showCoords,
      onCreate: this.showCoords,
    });
  }

  showCoords(c) { // show all coords
      $('#x').val(c.x);
      $('#y').val(c.y);
      $('#x2').val(c.x2);
      $('#y2').val(c.y2);
      $('#w').val(c.w);
      $('#h').val(c.h);

      let img:any;
      //canvas1.toDataURL("image/png"); //crossorigin="Anonymous"
      var canvas:any = document.getElementById("canvasThumbResult");
      var context    = canvas.getContext("2d");
      img = document.getElementById("image");
      let imgW:number = img.width;
      let imgH:number = img.height;

      var ratioY = imgH / img.height,
          ratioX = imgW / img.width;

      var getX = $('#x').val() * ratioX,
          getY = $('#y').val() * ratioY,
          getWidth = $('#w').val() * ratioX,
          getHeight = $('#h').val() * ratioY;

      context.drawImage(img,getX,getY,getWidth,getHeight,0,0,300,300);
      var fileContainer = $(".file-container");
      fileContainer.val(canvas.toDataURL("image/png"));
      fileContainer[0].dispatchEvent(new Event("input", { bubbles: true }));
  }

}
