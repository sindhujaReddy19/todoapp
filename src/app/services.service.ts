import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { item } from './service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  items:item[]=[{
    itemId:'1.',
    itemName:'Learn Angular',
    itemstatus:false
  },
  {
    itemId:'2.',
    itemName:'Learn Javascript',
    itemstatus:false
  },
  {
    itemId:'3.',
    itemName:'Learn React',
    itemstatus:false

  }
];
addItem(i:item){
  this.items.push(i);
}
veiwmenu(){
  return of(this.items)
}
deleteItem(i:item){
  const ind=this.items.findIndex((obj)=>{
    if(obj.itemId==i.itemId){
      return obj.itemId;
    }
    else{
      return false;
    }
  
})
this.items.splice(ind,1);
}
updatestatus(updatetodo:item){
  this.items.map((item)=>
  {
    if(item.itemId==updatetodo.itemId)
    {
      item.itemstatus=!item.itemstatus;
    }
    })
}
  constructor() { }
}