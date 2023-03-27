import { Component } from '@angular/core';
import { item } from '../service';

import { ServicesService } from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  useritem:any;
  itemid:any;
  itemName:any;
  constructor(private service:ServicesService){}
  items:item[]=[]
  ngOnInit(){
    this.service.veiwmenu().subscribe(res=>{
      this.items=res;
    })
  }
  delete(it:item){
    this.service.deleteItem(it);
  }
  additem(){
    this.useritem={
      
        itemId:this.itemid,
        itemName:this.itemName,
        itemstatus:false
    }
    this.service.addItem(this.useritem);
  }
  update(item:item){
    this.service.updatestatus(item);
  }
}
