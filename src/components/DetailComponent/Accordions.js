import React, { Component } from 'react';

 class Accordions extends React.Component{
     render(){
        return(


        <section id="page-content">
            <div class="container">
                <div class="row">
                    <div class="content col-lg-12" style={{padding:"0px"}}>
                        <h4>Shadow</h4>
                        <div class="accordion accordion-shadow">
                            <Item />
                            <div class="ac-item ac-active">
                                <h5 class="ac-title">Layout and design options</h5>
                                <div class="ac-content">
                                    <p>When, while the lovely valley teems with vapour around me, and the meridian sun
                                        strikes the upper surface of the impenetrable foliage of my trees, and but a few
                                        stray gleams steal into the inner sanctuary.</p>
                                    <p>I throw myself down among the tall grass by the trickling stream; and, as I lie
                                        close to the earth, a thousand unknown plants are noticed by me</p>
                                </div>
                            </div>
                            <Item />

                        </div>


            
                    </div>
 
                </div>
            </div>
        </section>
        );
     }
 }

 class Item extends React.Component{
    render(){
       return(
        <div class="ac-item">
            <h5 class="ac-title">Compatibility with premium plugins</h5>
            <div class="ac-content">
                <p>As it floats around us in an eternity of bliss; and then, my friend, when
                    darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and
                    absorb its power, like the form of a beloved mistress</p>
                <p>I often think with longing, Oh, would I could describe these conceptions, could
                    impress upon paper all that is living so full and warm within me, that it might
                    be the mirror of my soul, as my soul is the mirror of the infinite God! O my
                    friend — but it is too much for my strength — I sink under the weight of the
                    splendour of these visions!”</p>
            </div>
        </div>

       );
    }
}
 export default Accordions;