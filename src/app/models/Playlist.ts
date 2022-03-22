export type Playlist = {
    featuredPlaylists: featuredPlaylists;
}

type featuredPlaylists = {
    name: string;
    content: Array<content>;
}

type content = {
    id: string;
    kind: string;
    name: string;
    url: string;
    curator_name: string;
    artwork: string;
}