interface AnimeParams {
    targets: HTMLElement | HTMLElement[];
    translateX?: number | (() => number);
    translateY?: number | (() => number);
    scale?: number | (() => number);
    duration?: number;
    loop?: boolean;
    direction?: "normal" | "reverse" | "alternate";
    easing?: string;
    complete?: () => void;
    [key: string]: unknown;
}

declare const anime: {
    (params: AnimeParams): void;
};
