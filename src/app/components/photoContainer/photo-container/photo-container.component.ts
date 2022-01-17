import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { OpenCameraService } from 'src/app/services/openCamera/open-camera.service';
import { ReduxServiceService } from 'src/app/services/reduxService/redux-service.service';

@Component({
  selector: 'app-photo-container',
  templateUrl: './photo-container.component.html',
  styleUrls: ['./photo-container.component.scss'],
})
export class PhotoContainerComponent implements OnInit {

  private txtImg: Observable<string>;

  constructor(private actionSheetController: ActionSheetController, private camera: OpenCameraService, private redux: ReduxServiceService) { }

  ngOnInit() {
    this.txtImg = this.redux.getImg();
  }

  async abrirOpcaoDeFoto() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Foto',
      cssClass: 'action-sheet-style',
      buttons: [
        {
        text: 'Galeria',
        icon: 'images',
        id: 'delete-button',
        handler: async () => {
          let img = '';
          this.txtImg.subscribe(value => img = value);
          img = await this.camera.openPhotosLibrary();
          img = 'data:image/jpeg;base64,' + img;
          this.redux.adicionarImg(img);
        }
      }, {
        text: 'Câmera',
        icon: 'camera',
        handler: async () => {
          let img = '';
          this.txtImg.subscribe(value => img = value);
          img = await this.camera.openCamera();
          img = 'data:image/jpeg;base64,' + img;
          this.redux.adicionarImg(img);
        }
      }]
    });
    await actionSheet.present();
  }

}
