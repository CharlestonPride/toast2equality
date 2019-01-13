import React, { Component } from 'react';
import Markdown from 'react-markdown'
import NumberConverter from 'number-to-words'
import './Opportunity.css'

class Opportunity extends Component {
  Price(props) {
    if (props.remaining === 0) {
      return <h3 className="colored">SOLD OUT</h3>
    }
    return <h3 className="colored">${props.price.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</h3>
  }
  Remaining(props) {
    if (props.count === 0) {
      return <div>Sold Out</div>
    }
    if (props.count < 0 || props.count > 1) {
      return <div>Avaliable</div>
    }
    return <div>{props.count} Remaining</div>
  }

  Benefits(props) {
    return <ul>{React.Children.toArray(props.children).filter(o => o)}</ul>
  }

  Tickets(props) {

    var count = props.count;
    if(props.count < 10){
      var word = NumberConverter.toWords(count);
      count = word.charAt(0).toUpperCase() + word.slice(1) + " (" + count + ")";
    }

    if (props.vip) {
      return <li><strong>VIP Tickets:</strong> {count} (Includes open bar and catering)</li>
    }
    else {
      return <li><strong>General Admission Tickets:</strong> {count}</li>
    }
  }

  Stage(props) {
    return props.featured ? <li><strong>Stage:</strong> Logo Featured</li> : null;
  }

  Website(props) {
    if (props.website && props.website === "both") {
      return <li><strong>Website:</strong> Logo placement on ToastToEquality.com &amp; <a href="https://charlestonpride.org">CharlestonPride.org</a></li>;
    }
    return <li><strong>Website:</strong> Logo placement on ToastToEquality.com</li>;
  }

  Social(props) {
    if(props.count > 10)
    return <li><strong>Social Media:</strong> {props.count} posts/mentions minimum</li>

    var word = NumberConverter.toWords(props.count);
    word = word.charAt(0).toUpperCase() + word.slice(1);
    return <li><strong>Social Media:</strong> {word} ({props.count}) {props.count > 1 ? "posts/mentions" : "post/mention"} minimum</li>
  }

  Marketing(props) {
    const email = "mention/logo placement in all official email blasts";
    const radio = "radio advertisements";
    const print = " print media";
    const television = "television spots";
    let messages = [];
    if (props.email) {
      messages.push(email);
    }
    if (props.radio) {
      messages.push(radio);
    }
    if (props.print) {
      messages.push(print);
    }
    if (props.television) {
      messages.push(television);
    }

    if (messages.length === 0) {
      return null;
    }

    messages[0] = messages[0].charAt(0).toUpperCase() + messages[0].slice(1);

    var message = messages[0];
    for (var i = 1; i < messages.length - 1; i++) {
      message += ", " + messages[i];
    }

    if (messages.length > 1) {
      message += ", and " + messages[messages.length - 1];
    }

    message += ".";

    return <li><strong>Marketing:</strong> {message}</li>

  }

  Advertising(props) {

    const pridePrices = { full: 750, half: 500, quarter: 350 };
    const toastPrices = { full: 400, half: 300, "one-third": 200, quarter: 150 };
    var messages = [];

    //One (1) half page ad in Charleston Pride Guide ($500 value). One (1) quarter page ad in Toast To Equality program ($150 value)
    if (props.guide) {
      messages.push(`One (1) ${props.guide} page ad in Charleston Pride Guide ($${pridePrices[props.guide]} value).`)
    }
    if (props.program) {
      messages.push(`One (1) ${props.program} page ad in Toast To Equality program ($${toastPrices[props.program]} value).`)
    }
    if (messages.length === 0) {
      return null;
    }
    return <li><strong>Advertising:</strong> {messages.join(` `)}</li>;
  }

  render(props) {
    return (
      <div className="opportunity col-lg-6">
        <h2>{this.props.data.title} Sponsor</h2>
        <this.Price price={this.props.data.price} remaining={this.props.data.remaining} />
        <div className="description"><Markdown source={this.props.data.description} /></div>
        <this.Benefits>
          <this.Tickets vip={this.props.data.vip} count={this.props.data.tickets} />
          <this.Stage featured={this.props.data.featured} />
          <this.Website website={this.props.data.web} />
          <this.Social count={this.props.data.posts} />
          <this.Marketing email={this.props.data.email} radio={this.props.data.radio} print={this.props.data.print} television={this.props.data.television} />
          <this.Advertising guide={this.props.data.guide} program={this.props.data.program} />
        </this.Benefits>
      </div>
    );
  }
}

Opportunity.propTypes = {

};

export default Opportunity;