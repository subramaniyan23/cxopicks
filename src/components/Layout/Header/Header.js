import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
      searchText: ''
    };
	}

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <div className="topbar-header">
        <nav className="navbar top-navbar">
          <div className="navbar-leftside">
            <div className="navbar-header">
              <button
                className="navbar-toggler ml-2"
                type="button"
                data-toggle="collapse"
                data-target="#left-sidebar"
                aria-controls="left-sidebar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars" aria-hidden="true"></i>
              </button>            
            </div>
            <div className="logo">
                <img
                    src="/images/logo.png"
                    alt=""
                    className="user-photo-block mt-2"
                  />
            </div> 
          </div>         
            
          <ul className="navbar-nav">   
            <li className="nav-item">
              <div class="nav-link-right form-group mb-0 flex-fill">
                <div className="search_bar_div">
                      <input type="text" name="searchText" class="form-control user-search-box" placeholder="Search here" value={this.state.searchText} onChange={this.onChange} />
                    {/* <span className="fa fa-search search_icon"></span> */}
                </div>
              </div>
            </li>             
            <li className="nav-item">
              <a className="nav-link-right">
                <span className="fa fa-bell-o fa-2x"></span>
              </a>
            </li>                
            <li className="nav-item">
              <div className="user-profile">
                <a className="nav-link-right">
                  <img
                    src="/images/19@3x.png"
                    alt=""
                    className="user-photo-block"
                  />
                  <h4 className="mr-4">
                    <span className="user-name">
                      Suzanne Gregory
                    </span>
                    <span className="status">Admin</span>
                  </h4>
                </a>
              </div>
            </li>                        
          </ul>
        
        </nav>
      </div>
    );
  }
}

export default Header;
