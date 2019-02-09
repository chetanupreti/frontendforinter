import { Injectable } from '@angular/core'
import { Subject, Observable } from "rxjs";
let d=[];
let IMA=[];
// let da={};

@Injectable()
export class ImageService{
     
    myMethod$: Observable<any>;
    private myMethodSubject = new Subject<any>();
    constructor(){
    this.myMethod$ = this.myMethodSubject.asObservable();
    }
    myMethod(data) {
           
          d=data.photo;
         // console.log(d);
          let i=0;
          for(let p of data.photo){
          //IMG.push('https://farm'+p.farm+'.staticflickr.com/'+p.server+'/'+p.id+'_'+p.secret+'.jpg');
          IMA.push({"id":i,"caption":d[i].title,"url":'https://farm'+p.farm+'.staticflickr.com/'+p.server+'/'+p.id+'_'+p.secret+'.jpg'})
          i++;

      }
      
      //console.log(da);
          console.log(IMA)
     //console.log(IMAGES)
    }
    
    visibleImages = [];

    getImages(){
        
        return this.visibleImages =IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }

    
}


//console.log(Object.values(IMA))
console.log(IMA)


//console.log(IMAGES)
// let j=1;
// for(let data of d){
//     IMAGES.push({"id":j , "caption":data.title ,"url":IMG[0]})
//     j++;
//   }


const IMAGES =[
    {"id":1, "category": "boats", "caption":"piz", "url":"https://farm8.staticflickr.com/7904/47010889231_571ffaefa8.jpg"},
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
IMAGES.push({"id":16, "category": "library", "caption": "Saturday afternoon", "url":"assets/img/library_03.jpeg"})
IMAGES.push({"id":16, "category": "library", "caption": "Saturday afternoon", "url":"assets/img/library_03.jpeg"})

IMAGES.push({"id":16, "category": "library", "caption": "Saturday afternoon", "url":"assets/img/library_03.jpeg"})
IMAGES.push({"id":16, "category": "library", "caption": "Saturday afternoon", "url":"assets/img/library_03.jpeg"})