import React from "react";

import ReCAPTCHA from "react-google-recaptcha";


const TEST_SITE_KEY = "6LdcIKIfAAAAAG6MiFyZda9mF_OASkkToiZe52J9";
const DELAY = 500;

class Captcha extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      callback: "not fired",
      value: "[empty]",
      load: false,
      expired: "false"
    };
    this._reCaptchaRef = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ load: true });
    }, DELAY);
    console.log("didMount - reCaptcha Ref-", this._reCaptchaRef);
  }

  handleChange = value => {
    console.log("Captcha value:", value);
    this.setState({ value });
    // if value is null recaptcha expired
    if (value === null) this.setState({ expired: "true" });
  };

  asyncScriptOnLoad = () => {
    this.setState({ callback: "called!" });
    console.log("scriptLoad - reCaptcha Ref-", this._reCaptchaRef);
  };

  render() {
    const { value, callback, load, expired } = this.state || {};
    return (
      <div className="App">
        
        {load && (
          <ReCAPTCHA
            style={{ display: "inline-block" }}
            theme="light"
            ref={this._reCaptchaRef}
            sitekey={TEST_SITE_KEY}
            onChange={this.handleChange}
            asyncScriptOnLoad={this.asyncScriptOnLoad}
          />
        )}
      </div>
    );
  }
}

export default Captcha