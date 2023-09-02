import React from "react";
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import './requirementsPage1.scss';

export default function RequirementsPage1() {
    return (
        
    <div className="r-main">
        <Outlet />
        {/*<div className="rp-header">
            <Link to="/Requirements">CLICK TO APPLY NOW</Link>
    </div>*/}
        
        <div className="requirementPage1-container">
            <div className="requirements-content">
                <h1 className="rp-h1">REQUIREMENTS:</h1>
                    <div className="rp">
                        <p className="requirementsinfo-p">Suitable candidate with exceptional skill set and talent.</p>
                    </div>
                    <div className="rp">
                        <p className="requirementsinfo-p">At least 21 years old.</p>
                    </div>
                    <div className="rp">
                        <p className="requirementsinfo-p">Good quality videos. 
                            <li>At least 3 songs , different genres can be an added advantage.</li>
                        </p>
                    </div>
                    <div className="rp">
                        <p className="requirementsinfo-p">Good quality photos.  
                        <li>At least 5 Studio photos or professionally taken.</li>
                            <p className="requirementsinfo-p"><i className="Rminor">Strictly no selfies or mirror photos</i></p>
                        </p>
                    </div>
                    <div className="rp">
                        <p className="requirementsinfo-p">Repertoire with at least 100 songs.</p>
                    </div>
                    <div className="rp">
                        <p className="requirementsinfo-p">Personal bio or profile with past experience..</p>
                    </div>
                </div>
            
                    <div className="expected-content">
                    <h1 className="rp-h1">WHAT IS EXPRECTED OF YOU:</h1>
                        <div className="rp">
                            <p className="requirementsinfo-p">Teachable spirit and moldable character.</p>
                        </div>
                        <div className="rp">
                            <p className="requirementsinfo-p">Zeal for improvement.</p>
                        </div>
                        <div className="rp">
                            <p className="requirementsinfo-p">Mannerism and etiquette.
                            </p>
                        </div>
                        <div className="rp">
                            <p className="requirementsinfo-p">Elegancy and professional outlook.  
                                <li>always look presentable at all times.</li>
                            </p>
                        </div>
                        <div className="rp">
                            <p className="requirementsinfo-p">Team player.   
                                <li>Develop a mentality of succeeding as a team. “Your win is everyone’s win, as it is the same with your loss”. </li>
                            <p className="requirementsinfo-p"><i className="Rminor">Be an asset, not a liability. Bring new ideas to the table.</i></p>
                            </p>
                        </div>
                        <div className="rp">
                            <p className="requirementsinfo-p">Honesty and transparency.</p>
                        </div>
                        <div className="rp">
                            <p className="requirementsinfo-p">Great communication skills.</p>
                        </div>
                    </div> 
        </div>
        <div className="rp-header">
            <Link to="/Requirements">CLICK TO APPLY NOW</Link>
        </div>
    </div> 
    );
}



