import React, { Component } from 'react';

 class RecentPost extends Component{
     render(){
        return(
          
                <div className="post-thumbnail-entry">
                <img className="fl-rt" alt="" src={require("../../css/images/blog/thumbnail/5.jpg")} />                                 
                    <div className="post-thumbnail-content pn-lt">
                        <a href="#" className="fl-lt">لورم ایپسوم یا طرح‌نما </a>
                        <span className="post-date fl-rt mar-rt"><i className="icon-clock"></i> 6دقیقه پیش</span>
                        <span className="post-category fl-rt mar-rt"><i className="fa fa-tag"></i> تکنولوژی</span>
                    </div>
                </div>
          
        
        );
     }
 }

 export default RecentPost;