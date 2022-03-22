import { createAction, props } from "@ngrx/store";
import { Playlist } from "../models/Playlist";

export const GET_PLAYLIST = createAction('GET_PLAYLIST', 
    props<{playlist: Playlist}>()
);