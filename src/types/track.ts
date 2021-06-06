import { Artist } from './artist';

export interface Image {
  height: number,
  url: string,
  width: number,
}

export type Track = {
    album: {
        albumType: string,
        artists: Array<Artist>
    },
    artists: Array<Artist>
    availableMarkets: Array<string>,
    externalUrls: {
        spotify: string
    },
    href: string,
    id: string,
    images: Array<Image>,
    name: string,
    releaseDate: Date,
    releaseDatePrecision: string,
    totalTracks: number,
    type: string,
    uri: string,
}
