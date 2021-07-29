import { AlbumService } from './../album.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  name = 'shopGuru-app';
  nameIsEmpty = false;
  
  resetTheName(){
    this.name = "";
  };

  checkName(){
    if(this.name === ""){
      this.nameIsEmpty = true;
      return this.nameIsEmpty;
    }else{
      this.nameIsEmpty = false;
      return this.nameIsEmpty;
    }

  };

  albums;

  constructor(service: AlbumService) {
    this.albums = service.getAlbums();
   }

  ngOnInit(): void {
  }

}
