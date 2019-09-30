import axios from 'axios';

class Services {

    static getBlogPosts(limitPosts = 1) {
        return axios.get('https://blog.getshoutout.com/wp-json/wp/v2/posts?_embed=true&per_page=' + limitPosts + '&context=embed');
    }

}
export default Services;


