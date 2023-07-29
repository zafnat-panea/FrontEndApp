import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  doRefresh(event){
    console.log('event'); //tenemos que llamar a algo para cancelarlo.

    setTimeout(()=>{
      this.items = Array(20);
      event.target.complete(); //Para cancelarlo una vez que ya hemos cargado el array.
    },1500);
  }

}
