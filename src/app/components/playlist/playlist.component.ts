import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions } from 'swiper';
import { Playlist } from '../../models/Playlist';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';

@Component({
  selector: 'playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {
  public playlist: Playlist = <Playlist>{};

  constructor(
    private playlistService: PlaylistService
  ) { }

  ngOnInit(): void {
    this.playlistService.getPlaylists()
      .subscribe((response: Playlist) => {
        this.playlist = response;
        console.log(response);
      })
  }

  config: SwiperOptions = {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 10,
    keyboard: true,
    mousewheel: true,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  onSwiper([swiper]: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
