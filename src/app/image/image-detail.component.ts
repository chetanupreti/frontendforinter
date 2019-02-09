import { Component } from '@angular/core';
import { ImageService } from './shared/image.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent {
  image:any
  max: number = 10;
  rate: number;
  isReadonly: boolean = true;
   name:string;
   reason:string;
  constructor(private imageService: ImageService,
    private route: ActivatedRoute) { }

  ngOnInit(){
    this.image = this.imageService.getImage(
      +this.route.snapshot.params['id']
    )
  }

  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.key === 'Enter') {
      this.isReadonly = true;
     
    }
  }
  
 
  resetStars() {
    this.rate = 0;
    this.isReadonly = false;
  }
  submit(){
    console.log(this.rate)
  }
}
