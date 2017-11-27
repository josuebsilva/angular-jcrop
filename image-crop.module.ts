import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropComponent } from './image-crop/image-crop.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImageCropComponent],
  exports:[ImageCropComponent]
})
export class ImageCropModule { }
