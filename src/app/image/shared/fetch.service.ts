import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http:HttpClient) { 
    

  }
   img=[];
   photos;
  getImage(){
    this.http.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=07217dc1327ab3532b205883a124515d&tags=foods&per_page=80&page=1&format=json&nojsoncallback=1")
    .subscribe((res)=>{
          // console.log(res['photos']);
          for(let p of res["photos"].photo){
           console.log(p);
              this.img.push('https://farm'+p.farm+'.staticflickr.com/'+p.server+'/'+p.id+'_'+p.secret+'.jpg')
          }
         
         // this.photos=JSON.stringify(res['photos'])
         // this.photo=JSON.parse(this.photos)
         // console.log(this.photos)

    })
       //return this.img;
  }
}


//git remote add origin https://github.com/chetanupreti/frontendforinter.git
//git push -u origin master