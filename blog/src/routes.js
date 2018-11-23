
import LatestPosts from "./components/LatestPosts.vue"
import SinglePost from "./components/SinglePost.vue"

export default [
    {path:"/", component: LatestPosts},
    // {path:"/posts/:category", component: LatestPosts},
    {path:"/post/:id", component: SinglePost},
]