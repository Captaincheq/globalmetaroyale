import React from "react";
import Article from "../article/Article.component";
import {blog01, blog02, blog03, blog04, blog05} from './imports';
import './blog.styles.scss';

export default function Ourblog() {
    return (
        <div>
            <div className="blog">
                <div className="blog-heading">
                    <h1 className=" gradient-text"> A lot is happending, We are blogging about it.</h1>
                </div>
                <div className="blog-container">
                    <div className="blog-container-groupA">
                        <Article imgUrl={blog01} date="March 25 2023" title="Art is the future let explore?"/>
                    </div>
                    <div className="blog-container-groupB">
                        <Article imgUrl={blog02} date="March 25 2023" title="Art is the future let explore?"/>
                        <Article imgUrl={blog03} date="March 25 2023" title="Art is the future let explore?"/>
                        <Article imgUrl={blog04} date="March 25 2023"title="Art is the future let explore?"/>
                        <Article imgUrl={blog05} date="March 25 2023" title="Art is the future let explore?"/>
                    </div>
                </div>
            </div>
              
        </div>
    );
}