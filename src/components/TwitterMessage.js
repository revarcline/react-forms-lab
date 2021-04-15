import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
    };
  }

  charCount = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  render() {
    let remainingChars = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          value={this.state.message}
          id="message"
          onChange={this.charCount}
        />
        <p>{remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
