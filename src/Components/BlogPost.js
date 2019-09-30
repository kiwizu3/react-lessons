import React, { useEffect, useState } from 'react';
import Service from './../Services/Services';


const BlogPost = () => {

    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        try {
            Service.getBlogPosts().then(res => {
                let posts = res.data.map(item => {
                    let { id, title, link, excerpt, _embedded } = item;
                    let srcImage = "";
                    if (_embedded && _embedded['wp:featuredmedia'] && _embedded['wp:featuredmedia'].length) {
                        srcImage = _embedded['wp:featuredmedia'][0].source_url;
                    }
                    return { id, title, link, excerpt, srcImage };
                });
                setBlogPosts({ blogPosts: posts });
            }).catch(e => {

            });
        } catch (e) {

        }
    });


    return (
        <div className="row">
            {
                blogPosts.map(({ id, srcImage, title, link, excerpt }) => (
                    <div className="col-sm col-xs-12" key={id}>
                        <div className="card shadow border-0" >
                            <div>
                                <img className="card-img-top" src={srcImage} alt="ShoutOUT Blog" />
                                {/* || EmptyBlogImage */}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{title.rendered}</h5>
                                <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} className="card-text"></div>
                                <a href={link} rel="noopener noreferrer" target="_blank" className="btn btn-primary btn-round">Read More</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )

}
export default BlogPost;
