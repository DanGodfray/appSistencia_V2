import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ConsumoApiService } from 'src/app/service/consumo-api.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  idUser = 0
  userName = 0
  realName = 0
  emailUser = 0

  qrCodeString = 'Esto es un codigo QR de ejemplo'; //Variable para guardar el texto del codigo QR
  scannedResult: any; //Variable para guardar el resultado del escaneo
  //incompleto

  content_visibility = 'show'; //Variable para la visibilidad del contenido

  constructor(private consumoApiAlum:ConsumoApiService, private activeroute: ActivatedRoute, private router: Router, ) {

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



  nextPageAsignaturas(){ //Funcion para ir a la pagina de asignaturas

    this.router.navigate(['alumno/asignaturas']);
  }

}
