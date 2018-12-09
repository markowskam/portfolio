
import LatestPosts from "./components/LatestPosts.vue"
import SinglePost from "./components/SinglePost.vue"

export default [
    {path:"/", redirect: "/posts/"},
    {path:"/portfolio", redirect: "/posts/"}, //for GitHub pages
    {path:"/posts", component: LatestPosts, props: { category: null }},
    {path:"/posts/:category", component: LatestPosts, props: true},
    {path:"/post/:id", component: SinglePost, props: (route) => ({ id: parseInt(route.params.id) })},
]