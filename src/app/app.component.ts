import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProyectoAngularPMD';


  ngOnInit () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDpS_SrEQ1I9sR8MQZMoPYyJGPAVmSTMsA',
      authDomain: 'pmdcomprasappdrh-8388c.firebaseapp.com'
    });
  }
}
