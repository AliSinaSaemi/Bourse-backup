

import React, { Component } from 'react';

class CountDown extends Component{
    render(){
       return(
        <section id="page-content">
        <div class="container">
            <div class="row">

                <div class="content col-lg-12" style={{padding:"0px"}}>
                    <h4>Display links</h4>
                    <div class="row mt-4">
                    <Links />
                    <Links />
                    <Links />
                    </div>
                    <div class="line"></div>
                    <h4>Display Sample Text</h4>
                    <div class="row mt-4">
                    <Sample />
                    <Sample />
                    </div>
                    <div class="line"></div>
                    <h4>Display offer example</h4>
                    <Offer />
                    </div>

            </div>
        </div>
    </section>
       );
    }
}
class Links extends React.Component{
    render(){
    return(
        <div class="col-lg-4">
        <div class="p-countdown" data-delay="5">
            <div class="p-countdown-count">
                <p>Upload the next file in <strong><span class="count-number"></span></strong> seconds
                </p>
            </div>
            <div class="p-countdown-show">
                <h5><a href="#" class="btn btn-light"><i class="icon-upload-cloud"></i>
                        Upload</a></h5>
            </div>
        </div>
    </div>
        );
    }
}
class Sample extends React.Component{
    render(){
        return(
            <div class="col-lg-6">
            <div class="p-countdown" data-delay="6">
                <div class="p-countdown-count">
                    <h5> The text will be changed in <strong><span class="count-number"></span></strong>
                    </h5>
                    <p class="lead">The most happiest time of the day!. Morbi sagittis, sem quis
                        lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut
                        justo. Nulla varius consequat magna, id molestie ipsum volutpat quis.</p>
                </div>
                <div class="p-countdown-show">
                    <p class="lead">A true story, that never been told!. Fusce id mi diam, non
                        ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel
                        dolor.</p>
                </div>
            </div>
        </div>

            );
        }
}
class Offer extends React.Component{
    render(){
        return(
         <div class="row mt-4">
    <div class="col-lg-12">
        <div class="p-countdown" data-delay="8">
            <div class="p-countdown-count">
                <div class="row call-to-action cta-center">
                    <div class="col-lg-10">
                        <h3>Our offer will be accessible for you in <span class="count-number"></span></h3>
                        <p>This is a simple hero unit, a simple call-to-action-style component
                            for calling extra attention to featured content.</p>
                    </div>
                    <div class="col-lg-2">
                        <a class="btn disabled" href="#">Call us now!</a> </div>
                </div>
            </div>
            <div class="p-countdown-show">
                <div class="row call-to-action cta-center">
                    <div class="col-lg-10">
                        <h3>Join by April 27 and <span>Win $200</span> in Programs and Services
                        </h3>
                        <p>This is a simple hero unit, a simple call-to-action-style component
                            for calling extra attention to featured content.</p>
                    </div>
                    <div class="col-lg-2">
                        <a class="btn" href="#">Call us now!</a> </div>
                </div>
            </div>
        </div>
    </div>
</div>
     );
    }
}
export default CountDown;