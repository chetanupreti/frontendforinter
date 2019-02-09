import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ImageService } from "./image/shared/image.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  img = [];
  public data : Array<any>;
  constructor(private http: HttpClient,private imge:ImageService) {
    this.http.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=07217dc1327ab3532b205883a124515d&tags=foods&per_page=40&page=1&format=json&nojsoncallback=1")
    .subscribe((res) => {
    
       this.data=res['photos'];
   
       this.imge.myMethod(this.data);

    })
  }
  ngOnInit() {
   

  }

}
