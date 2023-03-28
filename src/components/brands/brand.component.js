import React from "react";
import './brand.component.styles.scss';
import {accorhotels,grand_hyatt,Hilton,Manila,w,One_Only} from './imports';


export default function Brand() {
    return (
        <div className="brand section__padding">
            <div className="brand-img">
                <img src={accorhotels} alt="accorhotels"/>
            </div>
            <div className="brand-img">
                <img src={grand_hyatt} alt="grand_hyatt"/>
            </div>
            <div className="brand-img">
                <img src={Hilton} alt="Hilton"/>
            </div>
            <div className="brand-img">
                <img src={Manila} alt="Manila"/>
            </div>
            <div className="brand-img">
                <img src={w} alt="W hotel"/>
            </div>
            <div className="brand-img">
                <img src={One_Only} alt="One_Only"/>
            </div>
        </div>
    )
}