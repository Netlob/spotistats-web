export type Artist = {
    externalUrls: {
        spotify: string;
    };
    followers: {
        href: string;
        total: number;
    };
    genres: Array<string>;
    href: string;
    id: string;
    name: string;
    popularity: number;
    type: string;
    uri: string;
};
