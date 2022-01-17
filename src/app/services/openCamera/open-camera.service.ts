import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class OpenCameraService {

  private valueImg: string;
  
  constructor(){ 
    this.valueImg = '';
  }

  async openPhotosLibrary(): Promise<string> {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Base64,
        saveToGallery: true,
        source: CameraSource.Photos
      });

      return image.base64String; 
  }

  async openCamera(): Promise<string> {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      saveToGallery: true,
      source: CameraSource.Camera
    });

    return image.base64String;
  }
}
