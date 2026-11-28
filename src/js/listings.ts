export interface Listing {
    id: string;
    title: string;
    description: string;
    media: {
        url: string;
        alt: string;
    }[];
    endsAt: string;
    bids: {
        amount: number;
    }[];
    _count: {
        bids: number;
    };
}