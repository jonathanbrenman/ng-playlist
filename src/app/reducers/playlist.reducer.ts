import { Action, createReducer, on } from "@ngrx/store";
import { GET_PLAYLIST } from "./playlist.actions";
import { Playlist } from "../models/Playlist";

export const playlist_initial: Playlist = <Playlist>{};

const _playlistReducer = createReducer(
    playlist_initial,
    on(GET_PLAYLIST, (state, {playlist}) => playlist)
);

export function playlistReducer(state: any, action: any) {
    return _playlistReducer(state, action);
}