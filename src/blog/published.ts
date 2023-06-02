import * as Unsolve from './unsolve.mdx';

export interface Post {
    id: string;
    // component has the type of a module in an .mdx file
    component: typeof Unsolve;
}
const posts: Post[] = [
    {
        id: 'unsolve',
        component: Unsolve,
    }
]
export default posts;
