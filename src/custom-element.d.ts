declare namespace JSX {
    interface IntrinsicElements {
        'box-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            type?: "solid" | "regular" | "logo";
            name: string;
            color?: string;
            size?: string;
            rotate?: number;
            flip?: "horizontal" | "vertical";
            border?: "square" | "circle";
            animation?: string;
            pull?: "left" | "right";
        };
    }
}

declare module "@assets/data/attractions.json" {
    const value: any;
    export default value;
}

declare module "@assets/data/food.json" {
    const value: any;
    export default value;
}

declare module "@assets/data/hotels.json" {
    const value: any;
    export default value;
}