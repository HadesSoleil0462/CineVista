  import {Component} from '@angular/core';
  import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
  import {ThemeService} from '../../services/theme.service';
  import {ToastController} from '@ionic/angular';

  @Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
  })

  export class SettingsPage {
    theme: 'dark' | 'light' | 'auto' = 'auto';
    profilePicture : any = 'assets/images/default-picture-profile.jpeg';

    constructor(private themeService : ThemeService, private toastController: ToastController) {
      if (localStorage.getItem('profilePicture')) {
        this.profilePicture = localStorage.getItem('profilePicture');
      }
  }

    /*toggleTheme(theme: 'dark' | 'light' | 'auto') {
      this.themeService.setTheme(theme)
    }*/


    async presentToast() {
      const toast = await this.toastController.create({
        message: 'Redémarrage de l\'application !',
        duration: 1500,
        position: 'bottom',
      });
      toast.onDidDismiss().then(() => {
        localStorage.setItem('navigateToDiscover', 'true');
        window.location.reload();
      });
      await toast.present();
    }



    async takeOrChoosePhoto() {
      try {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.DataUrl,
          source: CameraSource.Prompt,
          saveToGallery: false,
          correctOrientation: true
        });
        if (image.dataUrl) {
          localStorage.setItem('profilePicture', image.dataUrl);
          this.profilePicture = image.dataUrl;
        }
      } catch (error) {
        console.error('Error while taking or choosing the photo:', error);
      }
    }

  }
