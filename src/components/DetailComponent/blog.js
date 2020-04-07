import React, { Component } from 'react';

 class Blog extends Component{
     render(){
        return(
            <div class="post-item">
                <div class="post-item-wrap">
                    <div class="post-audio">
                        <a href="#">
                           <img alt="" src={require("../../css/images/blog/audio-bg.jpg")}/>
                        </a>
                        <span class="post-meta-category"><a href="">صدا</a></span>
                        <audio class="video-js vjs-default-skin" controls preload="false" data-setup="{}">
                            <source src="audio/beautiful-optimist.mp3" type="audio/mp3" />
                        </audio>
                    </div>
                    <div class="post-item-description">
                        <span class="post-meta-date"><i class="fa fa-calendar-o"></i>Jan 21, 2017</span>
                        <span class="post-meta-comments"><a href=""><i class="fa fa-comments-o"></i>33 Comments</a></span>
                        <span class="post-meta-category"><a href=""><i class="fa fa-tag"></i>آزمایشی</a></span>
                        <h2 className="fl-rt wdt" ><a href="#">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum)  متنی آزمایشی
                            </a></h2>
                        <p className="fl-rt">بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، </p>
                        <a href="#" className="fl-rt item-link">در حال برگذاری<i className="icon-chevron-right"></i></a>
                    </div>
                </div>
            </div>
        );
     }
 }

 export default Blog;