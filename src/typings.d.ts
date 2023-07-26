declare module '*.jpg';

declare module '*.md' {
    // markdown é string
    const value: string;
    export default value;
}

declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}
