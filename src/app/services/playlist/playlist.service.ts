import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Playlist } from '../../models/Playlist';


@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private apiUrl = 'https://portal.organicfruitapps.com'; 

  constructor(
    private http: HttpClient
  ) { }

  getPlaylists(): Observable<Playlist> {
    return this.http.get<Playlist>(`${this.apiUrl}/programming-guides/v2/us_en-us/featured-playlists.json`)
  }
}
