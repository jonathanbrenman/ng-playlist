import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/models/Playlist';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public playlists: Array<Playlist> = [];

  constructor() {

  }

  ngOnInit(): void {

  }

}
