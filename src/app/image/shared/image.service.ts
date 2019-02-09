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
          
          IMA.push({"id":i,"caption":d[i].title,"url":'https://farm'+p.farm+'.staticflickr.com/'+p.server+'/'+p.id+'_'+p.secret+'.jpg'})
          i++;

      }
      
          console.log(IMA)
    
    }
    
    visibleImages = [];

    getImages(){
        
        return this.visibleImages =IMA
    }

    getImage(id: number){
        return IMA.slice(0).find(image => image.id == id)
    }

    setRating(id:number, rating){
        IMA.slice(0).find(image => {
           if(image.id == id){
             image["rating"]=rating
           }
           return image.id == id
        })
    }

    
}



console.log(IMA)



