import React from 'react';
import PropTypes, { arrayOf, string } from 'prop-types';

import { FaBeer } from 'react-icons/fa';


import './YourArticle.css';

export default class YourArticle extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.articles = require("./_data/your-articles.json");
    this.state = { articles: this.articles };
    
  }
  renderArticles = () => 
  {
    const articles = this.state.articles;
    return articles.map(item =>
    {
      // parse google
      const dateFormat = new Date(item.postedDate);
      const month = dateFormat.toLocaleString("default", { month: "long" });
      const day = dateFormat.toLocaleString("default", { day: "numeric"});

      return (
        <div class="yourArticle" key="uniqueId1">
          <div class="yourArticle-image">
            <img alt="yourArticleImage" src={item.image}/>
          </div>
          <div class="yourArticle-title">{item.title}</div>
          <div class="yourArticle-description"> {item.description}</div>
          <div className="yourArticle-author-image">
            <img alt="yourArticleImage" src={item.author.image}/>
          </div>
          <div className="yourArticle-bookmark">
           < FaBeer Fa-sm/>
            
          </div>
          <div className="yourArticle-author-name">{item.author.name}</div>
          <div className="yourArticle-length">
          {month} {day} * {item.minutesToRead} min read 
          </div>
        </div> 
      );
    });
  }

  render()
  {
    const reXRT = this.renderArticles();
    return reXRT; 
  }
}

YourArticle.propTypes = 
{
    articles:arrayOf(string)
};