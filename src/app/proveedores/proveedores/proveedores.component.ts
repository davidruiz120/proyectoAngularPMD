import { ProveedoresService } from './../../servicios/proveedores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores: any;

  constructor(private proovedoresService: ProveedoresService) { }

  ngOnInit() {
    this.proveedores = this.proovedoresService.getProveedores();
  }

}
