import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); 
export const store = new Vuex.Store({
    state: {
        infos: 
        [
            {
               ImageTitle:'Image One',
               image : require('../assets/images/img1.jpg'),
               desc:"This is the first picture and it's lovely",
               id: 1
           },
            {
               ImageTitle: 'Image Two',
               image : require('../assets/images/img2.jpg'),
               desc:"Second picture",
               id: 2
           },
            {
               ImageTitle: 'Image Three',
               image : require('../assets/images/img3.jpg'),
               desc:"Third Picture",
               id: 3
           },
            {
               ImageTitle: 'Image Four',
               image : require('../assets/images/img4.jpg'),
               desc:"Fourth Picture",
               id: 4
           },
            {
               ImageTitle: 'Image Five',
               image : require('../assets/images/img5.jpg'),
               desc:"Fifth picture and it is also lovely",
               id: 5
           },
            {
               ImageTitle: 'Image Six',
               image : require('../assets/images/img6.jpg'),
               desc:"Sixth picture and also lovely",
               id: 6
           }
        ]
    }
});