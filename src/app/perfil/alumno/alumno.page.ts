import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ConsumoApiService } from 'src/app/service/consumo-api.service';

import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';



@Component({
    selector: 'app-alumno',
    templateUrl: './alumno.page.html',
    styleUrls: ['./alumno.page.scss'],
    standalone: false
})
export class AlumnoPage implements OnInit {

  idUser = 0
  userName = 0
  realName = 0
  emailUser = 0

  qrCodeString = 'Esto es un codigo QR de ejemplo'; //Variable para guardar el texto del codigo QR
  scannedResult: any; //Variable para guardar el resultado del escaneo
  //incompleto
  base64Image: any; //Variable para guardar la imagen de la camara

  content_visibility = 'show'; //Variable para la visibilidad del contenido

  constructor(private camera: Camera ,private consumoApiAlum:ConsumoApiService, private activeroute: ActivatedRoute, private router: Router, ) {

    this.activeroute.queryParams.subscribe(params => { //Se obtienen los datos del usuario que se envian desde la pagina de login 

      this.idUser = this.router.getCurrentNavigation()?.extras.state?.['id']
      this.userName = this.router.getCurrentNavigation()?.extras.state?.['user']
      this.router.getCurrentNavigation()?.extras.state?.['pass']
      this.realName = this.router.getCurrentNavigation()?.extras.state?.['nombre']
      this.emailUser = this.router.getCurrentNavigation()?.extras.state?.['correo']
      console.log(this.router.getCurrentNavigation()?.extras.state?.['id']);
      console.log(this.router.getCurrentNavigation()?.extras.state?.['user']);
      console.log(this.router.getCurrentNavigation()?.extras.state?.['pass']);
      console.log(this.router.getCurrentNavigation()?.extras.state?.['nombre']);
      console.log(this.router.getCurrentNavigation()?.extras.state?.['correo']);
  
    });
  
  }

  ngOnInit() {

  }

  camara(){ //Funcion para abrir la camara y escanear un codigo QR
      
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
  
      this.camera.getPicture(options).then((imageData) => {
        this.base64Image = 'data:image/jpeg;base64,' + imageData;
        console.log(this.base64Image);
      }, (err) => {
        console.log(err); // Handle error
      });
  
    }

  nextPageAsignaturas(){ //Funcion para ir a la pagina de asignaturas

    this.router.navigate(['alumno/asignaturas']);
  }

}
