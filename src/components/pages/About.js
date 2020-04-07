import React, { Component } from 'react';
import logo from '../../logo-final.svg';

class About extends Component {
    render() {
        return (
            <section id="page-content" class="sidebar-right">
            <div class="container">
                <div class="row">
                    
                    <div class="content col-lg-9">
                  
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
               
                        <div id="blog" class="post-thumbnails">
                         
                            <div className="post-item">
                                <div className="post-item-wrap">
                                    <div className="post-image">
                                        <a href="#">
                                        <img className="imglogo fl-rt" src={logo} />
                                           {/* <img alt="" src={"public/images/blog/12.jpg"}/>  */}
                                        </a>
                                        <span className="post-meta-category fl-rt"><a href="">مدل آزمایشی1</a></span>
                                    </div>
                                    <div className="post-item-description">
                                        <span className="post-meta-date fl-rt"><i className="fa fa-calendar-o"></i>98.02.12</span>
                                        <span className="post-meta-comments fl-rt"><a href=""><i className="fa fa-comments-o"></i>33 نظر</a></span>
                                        <h2 className="fl-rt wdt" ><a href="#">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum)  متنی آزمایشی
                                            </a></h2>
                                        <p className="fl-rt">بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، </p>
                                        <a href="#" className="item-link fl-rt">ادامه مطالب </a>
                                    </div>
                                </div>
                            </div>
                       
                            <div class="post-item">
                                <div class="post-item-wrap">
                                    <div class="post-slider">
                                        <div class="carousel dots-inside arrows-visible arrows-only" data-items="1" data-loop="true" data-autoplay="true" data-lightbox="gallery">
                                            <a href="images/blog/11.jpg" data-lightbox="gallery-image">
                                            <img className="imglogo fl-rt" src={logo} />
                                                {/* <img alt="" src="images/blog/16.jpg"> */}
                                            </a>
                                            <a href="images/blog/16.jpg" data-lightbox="gallery-image">
                                            <img className="imglogo fl-rt" src={logo} />
                                                {/* <img alt="" src="images/blog/11.jpg"> */}
                                            </a>
                                        </div>
                                        <span class="post-meta-category fl-rt"><a href="">مدل آزمایشی1</a></span>
                                    </div>
                                    <div class="post-item-description">
                                        <span class="post-meta-date"><i class="fa fa-calendar-o"></i> 21, 2017</span>
                                        <span className="post-meta-comments fl-rt"><a href=""><i className="fa fa-comments-o"></i>33 نظر</a></span>
                                        <span className="post-meta-category fl-rt">مدل شماره2</span>
                                        <h2 className="fl-rt wdt" ><a href="#">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum)  متنی آزمایشی
                                            </a></h2>
                                        <p className="fl-rt">بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، </p>
                                        <a href="#" className="item-link fl-rt">در حال برگذاری<i className="icon-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                    
                            <div class="post-item">
                                <div class="post-item-wrap">
                                    <div class="post-video">
                                        <iframe src="https://player.vimeo.com/video/198559065?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                                        <span class="post-meta-category"><a href="">آزمایشی</a></span>س
                                    </div>
                                    <div class="post-item-description">
                                    <span class="post-meta-date"><i class="fa fa-calendar-o"></i> 21, 2017</span>
                                        <span className="post-meta-comments fl-rt"><a href=""><i className="fa fa-comments-o"></i>33 نظر</a></span>
                                        <span className="post-meta-category fl-rt">مدل شماره2</span>
                                        <h2 className="fl-rt wdt" ><a href="#">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum)  متنی آزمایشی
                                            </a></h2>
                                        <p className="fl-rt">بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، </p>
                                        <a href="#" className="item-link fl-rt">در حال برگذاری<i className="icon-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                           
                            <div class="post-item">
                                <div class="post-item-wrap">
                                    <div class="post-video">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/dA8Smj5tZOQ" frameborder="0" allowfullscreen></iframe>
                                        <span class="post-meta-category"><a href="">آزمایشی</a></span>
                                    </div>
                                    <div class="post-item-description">
                                    <span class="post-meta-date"><i class="fa fa-calendar-o"></i> 21, 2017</span>
                                        <span className="post-meta-comments fl-rt"><a href=""><i className="fa fa-comments-o"></i>33 نظر</a></span>
                                        <span className="post-meta-category fl-rt">مدل شماره2</span>
                                        <h2 className="fl-rt wdt" ><a href="#">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum)  متنی آزمایشی
                                            </a></h2>
                                        <p className="fl-rt">بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، </p>
                                        <a href="#" className="item-link fl-rt">در حال برگذاری<i className="icon-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                      
                            <div class="post-item">
                                <div class="post-item-wrap">
                                    <div class="post-audio">
                                        <a href="#">
                                               <img className="imglogo fl-rt" src={logo} />
                                            {/* <img alt="" src="images/blog/audio-bg.jpg"> */}
                                        </a>
                                        <span className="post-meta-category fl-rt"><a href="">مدل آزمایشی1</a></span>
                                        <audio class="video-js vjs-default-skin" controls preload="false" data-setup="{}">
                                            <source src="audio/beautiful-optimist.mp3" type="audio/mp3" />
                                        </audio>
                                    </div>
                                    <div class="post-item-description">
                                    <span className="post-meta-date "><i className="fa fa-calendar-o"></i>98.02.12</span>
                                        <span className="post-meta-comments fl-rt"><a href=""><i className="fa fa-comments-o"></i>33 نظر</a></span>
                                        <span class="post-meta-category fl-rt"><a href=""><i class="fa fa-tag"></i>آزمایشی1</a></span>
                                        <h2 className="fl-rt wdt" ><a href="#">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum)  متنی آزمایشی
                                            </a></h2>
                                        <p className="fl-rt">بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، </p>
                                        <a href="#" className="item-link fl-rt">ادامه مطالب </a>
                                    </div>
                                </div>
                            </div>
                     
                            <div class="post-item quote">
                                <div class="post-item-wrap">
                                    <div class="post-quote-img">
                                        <a href="#">
                                            {/* <img src="images/quote.png"> */}
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
                       

                      
                            <div class="post-item border">
                                <div class="post-item-wrap">
                                    <div class="post-item-description">
                                    <span class="post-meta-date"><i class="fa fa-calendar-o"></i> 21, 2017</span>
                                        <span className="post-meta-comments fl-rt"><a href=""><i className="fa fa-comments-o"></i>33 نظر</a></span>
                                        <span className="post-meta-category fl-rt">مدل شماره2</span>
                                        <h2 className="fl-rt wdt" ><a href="#">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum)  متنی آزمایشی
                                            </a></h2>
                                        <p className="fl-rt">بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، </p>
                                        <a href="#" className="item-link fl-rt">در حال برگذاری<i className="icon-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                         
                            <div class="post-item">
                                <div class="post-item-wrap">
                                    <div class="post-audio">
                                        <iframe width="100%" height="227" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/172245994&amp;auto_play=false&amp;hide_related=true&amp;visual=true"></iframe>
                                        <span class="post-meta-category"><a href="">آزمایشی</a></span>
                                    </div>
                                    <div class="post-item-description">
                                    <span class="post-meta-date"><i class="fa fa-calendar-o"></i> 21, 2017</span>
                                        <span className="post-meta-comments fl-rt"><a href=""><i className="fa fa-comments-o"></i>33 نظر</a></span>
                                        <span className="post-meta-category fl-rt">مدل شماره2</span>
                                        <h2 className="fl-rt wdt" ><a href="#">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum)  متنی آزمایشی
                                            </a></h2>
                                        <p className="fl-rt">بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، </p>
                                        <a href="#" className="item-link fl-rt">در حال برگذاری<i className="icon-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                      
                            <div class="post-item">
                                <div class="post-item-wrap">
                                    <div class="post-video">
                                        <video class="video-js" controls preload="false" poster="video/Water-Park/Water-Park.jpg">
                                            <source src="video/Water-Park/Water-Park.mp4" type="video/mp4" />
                                            <source src="video/Water-Park/Water-Park.webm" type="video/webm" />
                                        </video>
                                        <span class="post-meta-category"><a href="">Video</a></span>
                                    </div>
                                    <div class="post-item-description">
                                    <span class="post-meta-date"><i class="fa fa-calendar-o"></i> 21, 2017</span>
                                        <span className="post-meta-comments fl-rt"><a href=""><i className="fa fa-comments-o"></i>33 نظر</a></span>
                                        <span className="post-meta-category fl-rt">مدل شماره2</span>
                                        <h2 className="fl-rt wdt" ><a href="#">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum)  متنی آزمایشی
                                            </a></h2>
                                        <p className="fl-rt">بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، </p>
                                        <a href="#" className="item-link ">در حال برگذاری<i className="icon-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                  
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-left"></i></a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item active"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">4</a></li>
                            <li class="page-item"><a class="page-link" href="#">5</a></li>
                            <li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-right"></i></a></li>
                        </ul>
                        
                    </div>
                
                    <div class="sidebar sticky-sidebar col-lg-3">
                      
                    <div className="widget ">
                            <h4 className="widget-title fl-rt">پست ها اخیر</h4>
                            <div className="post-thumbnail-list">
                                <div className="post-thumbnail-entry">
                                <img className="imglogo fl-rt" src={logo} />
                                    {/* <img alt="" src="images/blog/thumbnail/5.jpg"> */}
                                    <div className="post-thumbnail-content pn-lt">
                                        <a href="#" className="fl-lt">لورم ایپسوم یا طرح‌نما </a>
                                        <span className="post-date"><i className="icon-clock"></i> 6دقیقه پیش</span>
                                        <span className="post-category"><i className="fa fa-tag"></i> تکنولوژی</span>
                                    </div>
                                </div>
                                <div className="post-thumbnail-entry">
                                <img className="imglogo fl-rt" src={logo} />
                                    {/* <img alt="" src="images/blog/thumbnail/5.jpg"> */}
                                    <div className="post-thumbnail-content pn-lt">
                                    <a href="#" className="fl-lt">لورم ایپسوم یا طرح‌نما </a>
                                        <span className="post-date"><i className="icon-clock"></i>6دقیقه پیش </span>
                                        <span className="post-category"><i className="fa fa-tag"></i> تکنولوژی</span>
                                    </div>
                                </div>
                                <div className="post-thumbnail-entry">
                                <img className="imglogo fl-rt" src={logo} />
                                    {/* <img alt="" src="images/blog/thumbnail/5.jpg"> */}
                                    <div className="post-thumbnail-content pn-lt">
                                    <a href="#" className="fl-lt">لورم ایپسوم یا طرح‌نما </a>
                                        <span className="post-date"><i className="icon-clock"></i> 6m ago</span>
                                        <span className="post-category"><i className="fa fa-tag"></i> تکنولوژی</span>
                                    </div>
                                </div>
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
                       
                        <div class="widget  widget-newsletter">
                            {/* <form class="widget-subscribe-form" novalidate action="include/subscribe-form.php" role="form" method="post">
                                <h4 class="widget-title">Newsletter</h4>
                                <small>Stay informed on our latest news!</small>
                                <div class="input-group">
                                    <input type="email" required name="widget-subscribe-form-email" class="form-control required email" placeholder="Enter your Email">
                                    <span class="input-group-btn">
                                        <button type="submit" id="widget-subscribe-submit-button" class="btn"><i class="fa fa-paper-plane"></i></button>
                                    </span> </div>
                            </form> */}
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default About;
