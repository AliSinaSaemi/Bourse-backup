import React, { Component } from 'react';
import logo from '../../logo-final.svg';
import '../../css/plugins.css';
import '../../css/style.css';
import Blog from '../../components/DetailComponent/blog';
import Pagination from '../../components/DetailComponent/pagination';
import RecentPost from '../../components/DetailComponent/recentPost';



class Sidebar extends Component {
    render() {

        return (

            <section id="page-content" className="sidebar-right">
            <div className="container">
                <div className="row">
               
                    <div className="content col-lg-12">
                      
                        <div className="page-title">
                            <h1>صفحه اول </h1>
                            <div className="breadcrumb float-left">
                                <ul>
                                    <li><a href="#">Home</a>
                                    </li>
                                    <li><a href="#">Blog</a>
                                    </li>
                                    <li className="active"><a href="#">Sidebar Right</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div id="blog">
                       

                            <div class="post-item">
                                <div class="post-item-wrap">
                                    <div class="post-slider">
                                        <div class="carousel dots-inside arrows-visible arrows-only" data-items="1" data-loop="true" data-autoplay="true" data-lightbox="gallery">
                                            <a href="images/blog/11.jpg" data-lightbox="gallery-image">
                                                <img alt="" src={require("../../css/images/blog/16.jpg")} />
                                            </a>
                                            <a href="images/blog/16.jpg" data-lightbox="gallery-image">
                                                <img alt="" src={require("../../css/images/blog/11.jpg")} />
                                            </a>
                                        </div>
                                        <span class="post-meta-category"><a href="">Technology</a></span>
                                    </div>
                                    <div class="post-item-description">
                                        <span class="post-meta-date"><i class="fa fa-calendar-o"></i>Jan 21, 2017</span>
                                        <span class="post-meta-comments"><a href=""><i class="fa fa-comments-o"></i>33 Comments</a></span>
                                        <span class="post-meta-category">Lifestyle</span>
                                        <h2><a href="#">Simplicity, a post with slider gallery</a></h2>
                                        <p>Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.</p>
                                        <a href="#" class="item-link">Read More <i class="icon-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>

                     
                            <div className="post-item">
                                <div className="post-item-wrap">
                                    <div className="post-video">
                                        <iframe src="https://player.vimeo.com/video/198559065?title=0&byline=0&portrait=0" width="640" height="360"  ></iframe>
                                        <span className="post-meta-category"><a href="">فیلم ها</a></span>
                                    </div>
                                    <div className="post-item-description">
                                    <span className="post-meta-date fl-rt"><i className="fa fa-calendar-o"></i>98.02.12</span>
                                        <span className="post-meta-comments fl-rt"><a href=""><i className="fa fa-comments-o"></i>33 نظر</a></span>
                                        <span className="post-meta-category fl-rt">مدل شماره2</span>
                                        <h2 className="fl-rt wdt" ><a href="#">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum)  متنی آزمایشی
                                            </a></h2>
                                        <p className="fl-rt">بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، </p>
                                        <a href="#" className="item-link">در حال برگذاری<i className="icon-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                      
                            <div className="post-item">
                                <div className="post-item-wrap">
                                    <div className="post-video">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/dA8Smj5tZOQ"  ></iframe>
                                        <span className="post-meta-category"><a href="">فیلم ها</a></span>
                                    </div>
                                    <div className="post-item-description">
                                    <span className="post-meta-date fl-rt"><i className="fa fa-calendar-o"></i>98.02.12</span>
                                        <span className="post-meta-comments fl-rt"><a href=""><i className="fa fa-comments-o"></i>33 نظر</a></span>
                                        <span className="post-meta-category fl-rt">مدل شماره2</span>
                                        <h2 className="fl-rt wdt" ><a href="#">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum)  متنی آزمایشی
                                            </a></h2>
                                        <p className="fl-rt">بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، </p>
                                        <a href="#" className="item-link">در حال برگذاری<i className="icon-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                 
                            <div className="post-item">
                                <div className="post-item-wrap">
                                    <div className="post-image">
                                        <a href="#">                                      
                                        <img alt="" src={require("../../css/images/blog/17.jpg")} />
                                        </a>
                                        <span className="post-meta-category"><a href="">علم و دانش</a></span>
                                    </div>
                                    <div className="post-item-description">
                                    <span className="post-meta-date fl-rt"><i className="fa fa-calendar-o"></i>98.02.12</span>
                                        <span className="post-meta-comments fl-rt"><a href=""><i className="fa fa-comments-o"></i>33 نظر</a></span>
                                        <span className="post-meta-category fl-rt">مدل شماره2</span>
                                        <h2 className="fl-rt wdt" ><a href="#">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum)  متنی آزمایشی
                                            </a></h2>
                                        <p className="fl-rt">بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، </p>
                                        <a href="#" className="item-link">در حال برگذاری<i className="icon-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <Blog />
                         
                            <div class="post-item quote">
                                <div class="post-item-wrap">
                                    <div class="post-quote-img">
                                        <a href="#">
                                        <img alt="" src={require("../../css/images/quote.png")} />                               
                                        </a>
                                        <span class="post-meta-category"><a href="">آزمایشی</a></span>
                                    </div>
                                    <div class="post-item-description">
                                        <span class="post-meta-date fl-lt"><i class="fa fa-calendar-o"></i> 21, 2017</span>
                                        <span class="post-meta-category fl-lt"><a href=""><i class="fa fa-tag"></i>آزمایشی</a></span>
                                        <p className="tx-rt">بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش </p>
                                    </div>
                                </div>
                            </div>
     
                            <div className="post-item border">
                                <div className="post-item-wrap">
                                    <div className="post-item-description">
                                    <span className="post-meta-date fl-rt"><i className="fa fa-calendar-o"></i>98.02.12</span>
                                        <span className="post-meta-comments fl-rt"><a href=""><i className="fa fa-comments-o"></i>33 نظر</a></span>
                                        <span className="post-meta-category fl-rt">مدل شماره2</span>
                                        <h2 className="fl-rt wdt" ><a href="#">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum)  متنی آزمایشی
                                            </a></h2>
                                        <p className="fl-rt">بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، </p>
                                        <a href="#" className="item-link">در حال برگذاری<i className="icon-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                    
                            <div className="post-item">
                                <div className="post-item-wrap">
                                    <div className="post-audio">
                                        <iframe width="100%" height="227" scrolling="no"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/172245994&amp;auto_play=false&amp;hide_related=true&amp;visual=true"></iframe>
                                        <span className="post-meta-category"><a href="">فیلم ها</a></span>
                                    </div>
                                    <div className="post-item-description">
                                    <span className="post-meta-date fl-rt"><i className="fa fa-calendar-o"></i>98.02.12</span>
                                        <span className="post-meta-comments fl-rt"><a href=""><i className="fa fa-comments-o"></i>33 نظر</a></span>
                                        <span className="post-meta-category">مدل شماره2</span>
                                        <h2 className="fl-rt wdt" ><a href="#">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum)  متنی آزمایشی
                                            </a></h2>
                                        <p className="fl-rt">بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، </p>
                                        <a href="#" className="item-link">در حال برگذاری<i className="icon-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="post-item">
                                <div className="post-item-wrap">
                                    <div className="post-video">
                                        <video className="video-js" controls preload="false" poster="video/Water-Park/Water-Park.jpg">
                                            <source src="video/Water-Park/Water-Park.mp4" type="video/mp4" />
                                            <source src="video/Water-Park/Water-Park.webm" type="video/webm" />
                                        </video>
                                        <span className="post-meta-category"><a href="">آموزش ها</a></span>
                                    </div>
                                    <div className="post-item-description">
                                    <span className="post-meta-date fl-rt"><i className="fa fa-calendar-o"></i>98.02.12</span>
                                        <span className="post-meta-comments fl-rt"><a href=""><i className="fa fa-comments-o"></i>33 نظر</a></span>
                                        <span className="post-meta-category  fl-rt">مدل شماره2</span>
                                        <h2 className="fl-rt wdt" ><a href="#">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum)  متنی آزمایشی
                                            </a></h2>
                                        <p className="fl-rt">بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، </p>
                                        <a href="#" className="item-link">در حال برگذاری<i className="icon-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                        <Pagination />
                 
                    </div>
                
                    <div className="sidebar sticky-sidebar col-lg-3">
         
                        <div className="widget ">
                            <h4 className="widget-title fl-rt">پست ها اخیر</h4>
                            <div className="post-thumbnail-list">
                                <RecentPost />
                                <RecentPost />
                                <RecentPost />
                            </div>
                        </div>
                      
                        <div className="widget widget-tweeter fl-rt" data-username="envato" data-limit="2">
                            <h4 className="widget-title">جدیدترین خبرها</h4>
                        </div>
               
                        <div className="widget  widget-tags fl-rt">
                            <h4 className="widget-title">بازدیدها</h4>
                            <div className="tags">
                                <a href="#">Design</a>
                                <a href="#">Portfolio</a>
                                <a href="#">Digital</a>
                                <a href="#">Branding</a>
                                <a href="#">HTML</a>
                                <a href="#">Clean</a>
                                <a href="#">Peace</a>
                                <a href="#">Love</a>
                                <a href="#">CSS3</a>
                                <a href="#">jQuery</a>
                            </div>
                        </div>
          
                        <div className="widget  widget-newsletter">
                            <form className="widget-subscribe-form" novalidate action="include/subscribe-form.php" role="form" method="post">
                                <h4 className="widget-title">Newsletter</h4>
                                <small>Stay informed on our latest news!</small>
                                <div className="input-group">
                                    <input type="email" required name="widget-subscribe-form-email" className="form-control required email" placeholder="Enter your Email" />
                                    <span className="input-group-btn">
                                        <button type="submit" id="widget-subscribe-submit-button" className="btn"><i className="fa fa-paper-plane"></i></button>
                                    </span> 
                                </div>
                            </form>
                        </div>
                     
                    </div>
              
                </div>
            </div>
        </section>
        );
    }
}

export default Sidebar;
