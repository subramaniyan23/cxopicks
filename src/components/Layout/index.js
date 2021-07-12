import React from "react";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";

class CommonLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <section id="main-container">        
          <Header {...this.props} />
          <section id="main-content">
            <NavBar {...this.props} />
            {React.cloneElement(this.props.children, { ...this.props })}
          </section>
        </section>    
      </div>
    );
  }
}

export default CommonLayout;