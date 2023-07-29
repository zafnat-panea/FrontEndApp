import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  LOADING: HTMLIonLoadingElement;

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  mostrarLoading(){
    this.presentLoading('Cargando...');

    setTimeout(() => {
      this.loadingCtrl.dismiss();
    },2000);
  }

  async presentLoading(message:string){

    const loading = await this.loadingCtrl.create({
      message,
    });

    await loading.present();

  }

}
