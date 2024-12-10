import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthserviceService } from '../service/authservice.service';
import { Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthserviceService); // Inject al servicio de autenticación para saber si el usuario está logueado

  const router = inject(Router); // Inject al router para redirigir al usuario a la página de login si no está logueado

  if (authService.isLoggednIn()) { // Si el usuario está logueado, retornamos true para permitirle acceder a la siguiente ruta
    return true;
  }else{
    return router.navigate(['/login']); // Si el usuario no está logueado, lo redirigimos a la página de login
  }

};
