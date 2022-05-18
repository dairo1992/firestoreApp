import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { JsonplaceholderService } from 'src/app/services/jsonplaceholder.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.page.html',
  styleUrls: ['./images.page.scss'],
})
export class ImagesPage implements OnInit {
  images: any = [];

  // eslint-disable-next-line @typescript-eslint/naming-convention
  constructor(private JP: JsonplaceholderService, private firestoreService: FirestoreService) {
    // this.images = this.firestoreService.getImages().valueChanges();

    // Se uso 1 vez para guardar imagenes a Firebase
    // this.JP.getImages().subscribe(resp => {
    //   this.firestoreService.images(resp).then(
    //     () => { console.log('Guardadas'); },
    //     error => {
    //       console.error(error);
    //     }
    //   );
    // });

    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    // for (let i = 0; i < img.length; i++) {
    //   this.firestoreService.images(img[i]).then(
    //         () => { console.log('Guardadas'); },
    //         error => {
    //           console.error(error);
    //         }
    //       );
    // }
  }

  ngOnInit() {
    this.firestoreService.getImages().valueChanges().subscribe(resp => {
      this.images =  resp;
      console.log(this.images[0].images.title);
    });
    // console.log(this.images);
  }

}
