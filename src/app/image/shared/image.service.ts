import { Injectable } from '@angular/core'
import { FetchService } from "./fetch.service";
import { Subject, Observable } from "rxjs";
@Injectable()
export class ImageService{
     
    myMethod$: Observable<any>;
    private myMethodSubject = new Subject<any>();
    constructor(){
    this.myMethod$ = this.myMethodSubject.asObservable();
    }
    myMethod(data) {
        //console.log(data.photo); // I have data! Let's return it so subscribers can use it!
        // we can do stuff with data if we want
      for(let p of data.photo){
          IMG.push('https://farm'+p.farm+'.staticflickr.com/'+p.server+'/'+p.id+'_'+p.secret+'.jpg');

      }
      console.log(IMG)
      
    }
    
    visibleImages = [];

    getImages(){

        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }

    
}

const IMG=[];

for(let i of IMG){

}


const IMAGES =[
    {"id":1, "category": "boats", "caption": "View from the boat", "url":"https://farm8.staticflickr.com/7904/47010889231_571ffaefa8.jpg"},
    {"id":2, "category": "boats", "caption": "Sailing the coast", "url":"https://farm5.staticflickr.com/4854/32034410227_f28d8710c6.jpg"},
    {"id":3, "category": "boats", "caption": "The water was nice", "url":"https://farm8.staticflickr.com/7829/33154465968_73e86ff8e6.jpg"},
    {"id":4, "category": "boats", "caption": "Cool water cavern", "url":"assets/img/boat_04.jpeg"},
    {"id":5, "category": "boats", "caption": "Sunset at the docks", "url":"assets/img/boat_05.jpeg"},
    {"id":6, "category": "camping", "caption": "Camping Trip '17'", "url":"assets/img/camping_01.jpeg"},
    {"id":7, "category": "camping", "caption": "Kim and Jessie", "url":"assets/img/camping_02.jpeg"},
    {"id":8, "category": "camping", "caption": "View from the top", "url":"assets/img/camping_03.jpeg"},
    {"id":9, "category": "camping", "caption": "On the trail", "url":"assets/img/camping_04.jpg"},
    {"id":10, "category": "camping", "caption": "Our camping spot", "url":"assets/img/camping_05.jpeg"},
    {"id":11, "category": "camping", "caption": "RV Life", "url":"assets/img/camping_06.jpg"},
    {"id":12, "category": "camping", "caption": "Hiking trip 2017", "url":"assets/img/camping_07.jpeg"},
    {"id":13, "category": "library", "caption": "Big library", "url":"assets/img/library_01.jpeg"},
    {"id":14, "category": "library", "caption": "Stacks", "url":"assets/img/library_02.jpeg"},
    {"id":15, "category": "library", "caption": "Saturday afternoon", "url":"assets/img/library_03.jpeg"}
]
