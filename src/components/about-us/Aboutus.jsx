import React from "react";
import CTA from "../CTA/cta";
import './aboutus.styles.scss';

export default function Aboutus() {
    return (
        <div>
            <div className="about-container">
                <div className="who-we-are">
                        <div  className="about-img">
                            <img src={require('../../images/pic2.png')} alt="About Us" />
                        </div>
                        <div className="about-content">
                            <h1> 
                                 Who We Are ?
                            </h1>
                            <p>  But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
                        </div> 
                </div>
                <div className="who-we-are">
                        <div  className="about-img">
                            <img src={require('../../images/pic2.png')} alt="About Us" />
                        </div>
                        <div className="about-content">
                            <h1> 
                                Goals & Objectives.
                            </h1>
                            <p>  On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
                        </div> 
                </div>
                <div className="vision">
                    <div className="values">
                        <h1> 
                            Our Vision.
                        </h1>
                        <p>  To Be the best. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div> 
                    <div className="values">
                        <h1> 
                            Mission.
                        </h1>
                        <p>  To provide better standards If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                    </div> 
                    <div className="values">
                        <h1> 
                            Values.
                        </h1>
                        <p> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                    </div> 
                </div>  
              
                <div className="ourteam">
                    <h1>Our Team</h1>
                    <div className="members">
                        <div className="left">
                                <img src={require('../../images/pic2.png')} alt="Our Team" />
                        </div>
                        <div className="right">
                            <h2>Boss Dee</h2>
                            <h3>CEO</h3>
                            <p>loVestibulum lacinia sit amet lorem id venenatis. Vestibulum sagittis sed lorem nec venenatis. Suspendisse ullamcorper, tortor vitae lobortis tincidunt, purus diam eleifend ligula, ac laoreet velit erat iaculis magna. Fusce ex ligula, tincidunt id dui in, egestas varius metus. Quisque scelerisque nulla tellus, ac dictum mi pellentesque a. Nunc luctus imperdiet arcu, id sagittis purus tempor nec. Mauris et varius nunc, a congue leo. e dsf aste cver e lorem</p>
                        </div>
                    </div>
                    <div className="members">
                        <div className="left">
                                <img src={require('../../images/pic2.png')} alt="Our Team" />
                        </div>
                        <div className="right">
                            <h2>Boss Sharo</h2>
                            <h3>Manager</h3>
                            <p>wweAliquam erat volutpat. Curabitur aliquet vulputate tincidunt. Morbi facilisis urna arcu, ut suscipit dolor molestie sit amet. Aenean tristique, est eu aliquet laoreet, lorem massa iaculis leo, et suscipit velit mauris ac nulla. Duis at neque et elit consectetur tincidunt. Praesent bibendum diam et lectus volutpat varius. Donec vitae odio leo. Fusce facilisis ac lacus a molestie. Vestibulum at aliquam augue. Vivamus felis felis, consectetur ac gravida et, bibendum at nulla. Aenean egestas vestibulum elit. sre dsf aste cver e</p>
                        </div>
                    </div>
                    <div className="members">
                        <div className="left">
                                <img src={require('../../images/pic2.png')} alt="Our Team" />
                        </div>
                        <div className="right">
                            <h2>Alec</h2>
                            <h3>IT</h3>
                            <p>wwerwee asfwsre dictum. Proin non pretium felis. Sed ut nisl velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum at condimentum urna, vel malesuada diam. Nulla ultrices, magna quis sollicitudin sollicitudin, quam dui congue diam, a scelerisque ligula libero nec leo. Vestibulum iaculis eleifend varius. Fusce ac finibus sem. Phasellus dignissim risus et eros sollicitudin, at tempor sem malesuada. Vestibulum tincidunt sed ligula at placerat. Ut eu viverra risus. Suspendisse commodo, libero vitae sagittis gravida, erat dolor sollicitudin nisl, at molestie urna ex et ipsum. Suspendisse et tortor quis mi euismod faucibus non sed tortor. Nulla id diam sed tortor pretium euismod.  aste cver e</p>
                        </div>
                    </div>

                </div>
            </div>
            

            <CTA/>
        </div>
    );
}