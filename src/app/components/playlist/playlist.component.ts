import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions } from 'swiper';
import { Playlist } from '../../models/Playlist';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { Store, select } from "@ngrx/store";
import { GET_PLAYLIST } from 'src/app/reducers/playlist.actions';

@Component({
  selector: 'playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {
  public playlist: Playlist = <Playlist>{};

  constructor(
    private playlistService: PlaylistService,
    private store: Store<{ playlist: Playlist}>
  ) { }

  ngOnInit(): void {
    this.store.pipe(select("playlist")).subscribe(p => this.playlist = p);

    this.playlistService.getPlaylists()
      .subscribe((response: Playlist) => {
        this.setPlaylist(response);
      })
  }

  setPlaylist(playlist: Playlist) {
    this.store.dispatch(GET_PLAYLIST({ playlist }));
  }

  config: SwiperOptions = {
    direction: 'horizontal',
    slidesPerView: "auto",
    spaceBetween: 10,
    keyboard: true,
    mousewheel: true,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    }
  };
  onSwiper([swiper]: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
