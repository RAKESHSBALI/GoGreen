import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom:number=10
  openedWindow: number = 0
  showAlert = false;
  dismissible = true
  isInfoWindowOpened = false;
  
  public darkStyle = [
    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#263c3f'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#6b9a76'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#38414e'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#212a37'}]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9ca5b3'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#746855'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#1f2835'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#f3d19c'}]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#2f3948'}]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#17263c'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#515c6d'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#17263c'}]
    }
  ];



  ngOnInit() {
    this.setCurrentLocation();
  }

    // Get Current Location Coordinates
    private setCurrentLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;          
          this.longitude = position.coords.longitude;
          this.zoom = 10;
        });
      }
    }

    public locations = [{'id':1,'name':'Tree Plantation', 'latitude':18.730015, longitude:73.680617}, {'id':2,'name':'Swachh Bharat', 'latitude':18.548656, longitude:73.900238},{'id':3, 'name':'School Visit','latitude':18.366562, longitude:73.755899},
    {'id':4,'name':'Paper Recycling', 'latitude':18.532153, longitude:73.944402},{'id':5,'name':'Paper Bag Creation', 'latitude':18.591272, longitude:73.895983}]
    
    public openwindow(id){
      console.log(id);
      this.openedWindow = id
      this.isInfoWindowOpened = true;
    }

    public isInfoWindowOpen(id){
      return this.openedWindow == id
    }

    public register(){
      console.log('Resgistered')
      this.showAlert = true;
      this.isInfoWindowOpened = false;
    }
    // public registerold(){
    //   this.toastr.success('Hello world!', 'Toastr fun!',{
    //     disableTimeOut:true
    //   });
    // }

    public onClosed(){
      this.showAlert = false;
    }

}
