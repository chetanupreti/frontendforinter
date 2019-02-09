import { Injectable } from '@angular/core'

let d=[];
let IMA=[];
// let da={};

@Injectable()
export class ImageService{
     
   
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
        
        return this.visibleImages =IMA
    }

    getImage(id: number){
        return IMA.slice(0).find(image => image.id == id)
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


<<<<<<< HEAD
=======

    
>>>>>>> 224181de008353614c22e370267a622659e05059
