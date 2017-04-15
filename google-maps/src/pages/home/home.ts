import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {GoogleMaps, GoogleMap, LatLng, GoogleMapsEvent} from "@ionic-native/google-maps";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  location: any;
  map: GoogleMap;

  constructor(public navCtrl: NavController, public platform: Platform, public googleMaps: GoogleMaps, public geolocation: Geolocation) {
    platform.ready().then(() => {
      this.loadMap();
    });
  }

  loadMap() {
    let watch = this.geolocation.watchPosition();
      watch.subscribe((data) => {
        let location = new LatLng(data.coords.latitude, data.coords.longitude);

        this.map = new GoogleMap('map', {
          'backgroundColor': 'white',
          'controls': {
            'compass': true,
            'myLocationButton': false,
            'indoorPicker': true,
            'zoom': false
          },
          'gestures': {
            'scroll': true,
            'tilt': true,
            'rotate': true,
            'zoom': true
          },
          'camera': {
            'latLng': location,
            'tilt': 30,
            'zoom': 15,
            'bearing': 50
          }
        });

        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
          console.log('Map is ready!');
        });
      });
  }
}
