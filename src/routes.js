import Home from './components/Home.vue';
import Services from './components/Service.vue';
import Blog from './components/Blog.vue';
import Contact from './components/Contact.vue';
import Details from './components/Detail.vue';

export const routes = [
    {
        path:'',
        component: Home,
        name: 'home'
    },
    {
        path:'/services',
        component: Services,
        name: 'services'
    },
    {
        path:'/blog',
        component: Blog,
        name: 'blog'
    },
    {
        path:'/contact',
        component: Contact,
        name: 'home'
    },
    {
        path:'/details/:id',
        component: Details,
        name: 'details'
    },
    {
        path:'*',
        redirect: "/"
    }
];