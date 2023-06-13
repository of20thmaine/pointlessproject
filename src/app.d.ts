interface Post {
    title: string;
    date: string;
    description: string;
    imgKey: string;
}

declare module '$lib/img/*' {
    const meta: Object[];
    export default meta;
}
