import React, { Component } from 'react';

class Carousel extends Component{
    render(){
       return(
        <div class="carousel" data-items="3">
                            <div class="post-item border">
                                <div class="post-item-wrap">
                                    <div class="post-image">
                                        <a href="#">
                                            <img alt="" src="images/blog/12.jpg" /></a>
                                        <span class="post-meta-category"><a href="">Lifestyle</a></span>
                                    </div>
                                    <div class="post-item-description">
                                        <span class="post-meta-date"><i class="fa fa-calendar-o"></i>Jan 21, 2017</span>
                                        <span class="post-meta-comments"><a href=""><i class="fa fa-comments-o"></i>33
                                                Comments</a></span>
                                        <h2><a href="#">Lighthouse, standard post with a single image</a></h2>
                                        <p>Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus
                                            commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.</p>
                                        <a href="#" class="item-link">Read More <i class="icon-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="post-item border">
                                <div class="post-item-wrap">
                                    <div class="post-slider">
                                        <div class="carousel dots-inside arrows-visible arrows-only" data-items="1" data-loop="true" data-autoplay="true" data-lightbox="gallery">
                                            <a href="images/blog/11.jpg" data-lightbox="gallery-image">
                                                <img alt="" src="images/blog/16.jpg" /></a>
                                            <a href="images/blog/16.jpg" data-lightbox="gallery-image">
                                                <img alt="" src="images/blog/11.jpg" /></a>
                                        </div>
                                        <span class="post-meta-category"><a href="">Technology</a></span>
                                    </div>
                                    <div class="post-item-description">
                                        <span class="post-meta-date"><i class="fa fa-calendar-o"></i>Jan 21, 2017</span>
                                        <span class="post-meta-comments"><a href=""><i class="fa fa-comments-o"></i>33
                                                Comments</a></span>
                                        <h2><a href="#">Simplicity, a post with slider gallery</a></h2>
                                        <p>Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus
                                            commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.</p>
                                        <a href="#" class="item-link">Read More <i class="icon-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="post-item border">
                                <div class="post-item-wrap">
                                    <div class="post-image">
                                        <a href="#">
                                            <img alt="" src="images/blog/17.jpg" /></a>
                                        <span class="post-meta-category"><a href="">Science</a></span>
                                    </div>
                                    <div class="post-item-description">
                                        <span class="post-meta-date"><i class="fa fa-calendar-o"></i>Jan 21, 2017</span>
                                        <span class="post-meta-comments"><a href=""><i class="fa fa-comments-o"></i>33
                                                Comments</a></span>
                                        <h2><a href="#">Lighthouse, standard post with a single image</a></h2>
                                        <p>Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus
                                            commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.</p>
                                        <a href="#" class="item-link">Read More <i class="icon-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="post-item border">
                                <div class="post-item-wrap">
                                    <div class="post-image">
                                        <a href="#">
                                            <img alt="" src="images/blog/18.jpg" /></a>
                                        <span class="post-meta-category"><a href="">Science</a></span>
                                    </div>
                                    <div class="post-item-description">
                                        <span class="post-meta-date"><i class="fa fa-calendar-o"></i>Jan 21, 2017</span>
                                        <span class="post-meta-comments"><a href=""><i class="fa fa-comments-o"></i>33
                                                Comments</a></span>
                                        <h2><a href="#">Lighthouse, standard post with a single image</a></h2>
                                        <p>Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus
                                            commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.</p>
                                        <a href="#" class="item-link">Read More <i class="icon-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="post-item border">
                                <div class="post-item-wrap">
                                    <div class="post-slider">
                                        <div class="carousel dots-inside arrows-visible arrows-only" data-autoplay="2600" data-animate-in="fadeIn" data-animate-out="fadeOut" data-items="1" data-loop="true" data-autoplay="true" data-lightbox="gallery">
                                            <a href="images/blog/19.jpg" data-lightbox="gallery-image">
                                                <img alt="" src="images/blog/19.jpg" /></a>
                                            <a href="images/blog/20.jpg" data-lightbox="gallery-image">
                                                <img alt="" src="images/blog/20.jpg" /></a>
                                        </div>
                                        <span class="post-meta-category"><a href="">Technology</a></span>
                                    </div>
                                    <div class="post-item-description">
                                        <span class="post-meta-date"><i class="fa fa-calendar-o"></i>Jan 21, 2017</span>
                                        <span class="post-meta-comments"><a href=""><i class="fa fa-comments-o"></i>33
                                                Comments</a></span>
                                        <h2><a href="#">Simplicity, a post with slider gallery</a></h2>
                                        <p>Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus
                                            commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.</p>
                                        <a href="#" class="item-link">Read More <i class="icon-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>

        </div>
       );
    }
}


class Item extends React.Component{
    render(){
        return(
            <div class="post-item border">
                <div class="post-item-wrap">
                    <div class="post-slider">
                        <div class="carousel dots-inside arrows-visible arrows-only" data-autoplay="2600" data-animate-in="fadeIn" data-animate-out="fadeOut" data-items="1" data-loop="true" data-autoplay="true" data-lightbox="gallery">
                            <a href="images/blog/19.jpg" data-lightbox="gallery-image">
                                <img alt=""  src={require("../../css/images/blog/19.jpg")} /></a>
                            <a href="images/blog/20.jpg" data-lightbox="gallery-image">
                                <img alt="" src={require("../../css/images/blog/20.jpg")} /></a>
                        </div>
                        <span class="post-meta-category"><a href="">Technology</a></span>
                    </div>
                    <div class="post-item-description">
                        <span class="post-meta-date"><i class="fa fa-calendar-o"></i>Jan 21, 2017</span>
                        <span class="post-meta-comments"><a href=""><i class="fa fa-comments-o"></i>33
                                Comments</a></span>
                        <h2><a href="#">Simplicity, a post with slider gallery</a></h2>
                        <p>Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus
                            commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.</p>
                        <a href="#" class="item-link">Read More <i class="icon-chevron-right"></i></a>
                    </div>
                </div>
            </div>
    
            );
    }
}
export default Carousel;