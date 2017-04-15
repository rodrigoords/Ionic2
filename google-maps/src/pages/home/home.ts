import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import {GoogleMaps, GoogleMap, LatLng, GoogleMapsEvent} from "@ionic-native/google-maps";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  location: any;
  map: GoogleMap;

  constructor(public navCtrl: NavController, private googleMaps: GoogleMaps, public platform: Platform) {
    this.platform.ready().then(() => {
      this.loadMap();
    });
  }
  loadMap() {
    this.location = new LatLng(-34.9290,138.6010);
    this.map = new GoogleMap('map', {
      'backgroundColor': 'white',
      'controls': {
        'compass': true,
        'myLocationButton': true,
        'indoorPicker': true,
        'zoom': true,
        'center': location
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

    this.map.setCenter(this.location);

    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
    console.log('Map is ready!');
    });
  }
}
