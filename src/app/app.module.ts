import { GuardService } from './servicios/guard.service';
import { AutenticacionService } from './servicios/autenticacion.service';
import { PresupuestosService } from './servicios/presupuestos.service';
import { Routes, RouterModule } from '@angular/router';
import { ProveedoresService } from './servicios/proveedores.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { RegistroComponent } from './autentication/registro/registro.component';
import { InisesComponent } from './autentication/inises/inises.component';


const routes: Routes = [
  { path: '', component: InicioComponent, canActivate: [GuardService] },
  { path: 'proveedores', component: ProveedoresComponent, canActivate: [GuardService] },
  { path: 'presupuestos', component: PresupuestosComponent, canActivate: [GuardService] },
  { path: 'addprovee', component: AddproveeComponent, canActivate: [GuardService]},
  { path: 'addpres', component: AddpresComponent, canActivate: [GuardService]},
  { path: 'editpres/:id', component: EditpresComponent, canActivate: [GuardService]},
  { path: 'registro', component: RegistroComponent},
  { path: 'iniciosesion', component: InisesComponent},
  { path: '**', component: InicioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpresComponent,
    PresupuestosComponent,
    EditpresComponent,
    RegistroComponent,
    InisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProveedoresService, PresupuestosService, AutenticacionService, GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
