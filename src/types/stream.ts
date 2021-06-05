import { Track } from './track';

export type Stream = {
    context: {
        externalUrls: {
            spotify: string;
        };
        href: string;
        type: string;
        uri: string;
    };
    playedAt: string;
    track: Track
}