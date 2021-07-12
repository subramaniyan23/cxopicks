import React from "react";

class NavBar extends React.Component {
  constructor(props) {
		super(props);
		this.state = {};
	}

  render() {
    return (
      <aside className="left-sidebar" id="left-sidebar">
        <nav className="navbar">
          <div className="scroll-sidebar">
            <div className="sidebar-nav">
              <span className="border_line"></span>
              <ul>
                <li className="sidebar-item">
                  <a
                    className={(this.props.location.pathname.includes('/') || this.props.location.pathname.includes('/profile')) ? "sidebar-link active" : "sidebar-link"}
                    onClick={() => { this.props.history.push("/profile") }}
                  >
                    <span className="box_icon">01</span>Profile Details
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className={this.props.location.pathname.includes('/usecase') ? "sidebar-link active" : "sidebar-link"}
                    // onClick={() => { this.props.history.push("/usecase") }}
                  >
                    <span className="box_icon">02</span>Use Case Details
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className={this.props.location.pathname.includes('/pricing') ? "sidebar-link active" : "sidebar-link"}
                    // onClick={() => { this.props.history.push("/pricing") }}
                  >
                    <span className="box_icon">03</span>Pricing Info
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className={this.props.location.pathname.includes('/marketing') ? "sidebar-link active" : "sidebar-link"}
                    // onClick={() => { this.props.history.push("/marketing") }}
                  >
                    <span className="box_icon">04</span>Marketing Assets
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className={this.props.location.pathname.includes('/workflow') ? "sidebar-link active" : "sidebar-link"}
                    // onClick={() => { this.props.history.push("/workflow") }}
                  >
                    <span className="box_icon">05</span>Workflow Details
                  </a>
                </li>               
              </ul>
            </div>
          </div>
        </nav>
     </aside>
    );
  }
}


export default NavBar;
