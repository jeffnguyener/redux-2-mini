import React, { Component } from 'react';
import Card from './../shared/Card/Card';
import Loading from './../shared/Loading/Loading';
import { requestArticles } from './../../redux/hackerNewsReducer'
import { connect } from 'react-redux'

class HackerNews extends Component {
  componentDidMount() {
    this.props.requestArticles()
  }

  render() {
    console.log(this.props);
    const articles = this.props.hackerNews.articles.map((article => <Card key={article.id} article={article} />))
    return (
      <div className='news-container'>
        <img style={styles.logo} src="./hackerNews.jpeg" alt="" />
        {this.props.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return reduxState
};

export default connect(mapStateToProps, { requestArticles })(HackerNews);


const styles = {
  logo: {
    width: '250px',
    margin: '50px 0px'
  }
};