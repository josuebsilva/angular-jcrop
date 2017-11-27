# angular-jcrop

How use

### Import this in "index.html"
    <script src="http://jcrop-cdn.tapmodo.com/v2.0.0-RC1/js/Jcrop.js"></script>
    <link rel="stylesheet" href="http://jcrop-cdn.tapmodo.com/v2.0.0-RC1/css/Jcrop.css" type="text/css">
### Import the module
    import { ImageCropModule } from './../image-crop/image-crop.module';
    @NgModule({
      declarations:[
        DashboardComponent,
      ],
      imports:[
        ImageCropModule,
      ],
      exports:[
      ]
    })
    export class DashboardModule{

    }
### Add in your component
    <app-image-crop boxWidth="370" boxHeight="370" selectedX="10" selectedY="10" maxWidth="300" maxHeight="300" minWidth="300" minHeight="300" selectedWidth="300" selectedHeight="300"></app-image-crop>
    
    Add input with "file-container" class for receved image croped in base64 value
    <input type="hidden" calss="file-container" name="imagePicture" [(ngModel)]="model.imagePicture" #imagePicture="ngModel">
### Import the "ImageCropService"
    import { ImageCropService } from './../image-crop/image-crop.service';
    
    constructor(private imageCroService : ImageCropService) { }
### Implement for start jcrop
    this.imageCroService.start("yourfileID");

