

import React, { Component } from 'react';

 class PageTitle extends Component{
     render(){
        return(
                <section id="page-title">
                <div class="container">
                    <div class="page-title">
                        <h1>Countdown</h1>
                        <span>Simple countdown to show links, content... or anything in your site using specific countdown time.</span>
                    </div>
                    <div class="breadcrumb">
                        <ul>
                            <li><a href="#">Home</a> </li>
                            <li><a href="#">Shortcodes</a> </li>
                            <li class="active"><a href="#">Countdown</a> </li>
                        </ul>
                    </div>
                </div>
                </section>
        );
     }
 }

 export default PageTitle;