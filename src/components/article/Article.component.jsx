import React from "react";
import './Article.styles.scss';

export default function Article({imgUrl, date, title}) {
    return (
        <div>
            <div className="blog-container-article">
                <div className="blog-container-article-image">
                    <img src={imgUrl} alt="blog" />
                </div>
                <div className="blog-container-article-content">
                    <div>
                        <p>{date}</p>
                        <h3>{title}</h3>
                    </div>
                    <p>Read Full Article</p>
                </div>
            </div>
              
        </div>
    );
}