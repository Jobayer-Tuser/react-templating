import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
        <div id="header" className="app-header">
            <div className="mobile-toggler">
                <button type="button" className="menu-toggler" data-toggle="sidebar-mobile">
                <span className="bar" />
                <span className="bar" />
                </button>
            </div>
            <div className="brand">
                <div className="desktop-toggler">
                <button type="button" className="menu-toggler" data-toggle="sidebar-minify">
                    <span className="bar" />
                    <span className="bar" />
                </button>
                </div>
                <a href="#" className="brand-logo">
                <img src="assets/img/logo.png" alt height={20} />
                </a>
            </div>
            <div className="menu">
                <form className="menu-search" method="POST" name="header_search_form">
                <div className="menu-search-icon"><i className="fa fa-search" /></div>
                <div className="menu-search-input">
                    <input type="text" className="form-control" placeholder="Search menu..." />
                </div>
                </form>
                <div className="menu-item dropdown">
                <a href="#" data-bs-toggle="dropdown" data-display="static" className="menu-link">
                    <div className="menu-icon"><i className="fa fa-bell nav-icon" /></div>
                    <div className="menu-label">3</div>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-notification">
                    <h6 className="dropdown-header text-dark mb-1">Notifications</h6>
                    <a href="#" className="dropdown-notification-item">
                    <div className="dropdown-notification-icon">
                        <i className="fa fa-receipt fa-lg fa-fw text-success" />
                    </div>
                    <div className="dropdown-notification-info">
                        <div className="title">Your store has a new order for 2 items totaling $1,299.00</div>
                        <div className="time">just now</div>
                    </div>
                    <div className="dropdown-notification-arrow">
                        <i className="fa fa-chevron-right" />
                    </div>
                    </a>
                    <a href="#" className="dropdown-notification-item">
                    <div className="dropdown-notification-icon">
                        <i className="far fa-user-circle fa-lg fa-fw text-muted" />
                    </div>
                    <div className="dropdown-notification-info">
                        <div className="title">3 new customer account is created</div>
                        <div className="time">2 minutes ago</div>
                    </div>
                    <div className="dropdown-notification-arrow">
                        <i className="fa fa-chevron-right" />
                    </div>
                    </a>
                    <a href="#" className="dropdown-notification-item">
                    <div className="dropdown-notification-icon">
                        <img src="assets/img/icon/android.svg" alt width={26} />
                    </div>
                    <div className="dropdown-notification-info">
                        <div className="title">Your android application has been approved</div>
                        <div className="time">5 minutes ago</div>
                    </div>
                    <div className="dropdown-notification-arrow">
                        <i className="fa fa-chevron-right" />
                    </div>
                    </a>
                    <a href="#" className="dropdown-notification-item">
                    <div className="dropdown-notification-icon">
                        <img src="assets/img/icon/paypal.svg" alt width={26} />
                    </div>
                    <div className="dropdown-notification-info">
                        <div className="title">Paypal payment method has been enabled for your store</div>
                        <div className="time">10 minutes ago</div>
                    </div>
                    <div className="dropdown-notification-arrow">
                        <i className="fa fa-chevron-right" />
                    </div>
                    </a>
                    <div className="p-2 text-center mb-n1">
                    <a href="#" className="text-dark text-opacity-50 text-decoration-none">See all</a>
                    </div>
                </div>
                </div>
                <div className="menu-item dropdown">
                <a href="#" data-bs-toggle="dropdown" data-display="static" className="menu-link">
                    <div className="menu-img online">
                    <img src="assets/img/user/user.jpg" alt className="ms-100 mh-100 rounded-circle" />
                    </div>
                    <div className="menu-text"><span className="__cf_email__" data-cfemail="b2d8dddadcc1dfdbc6daf2c1c6c7d6dbdd9cd1dddf">[email&nbsp;protected]</span>
                    </div>
                </a>
                <div className="dropdown-menu dropdown-menu-right me-lg-3">
                    <a className="dropdown-item d-flex align-items-center" href="#">Edit Profile <i className="fa fa-user-circle fa-fw ms-auto text-dark text-opacity-50" /></a>
                    <a className="dropdown-item d-flex align-items-center" href="#">Inbox <i className="fa fa-envelope fa-fw ms-auto text-dark text-opacity-50" /></a>
                    <a className="dropdown-item d-flex align-items-center" href="#">Calendar <i className="fa fa-calendar-alt fa-fw ms-auto text-dark text-opacity-50" /></a>
                    <a className="dropdown-item d-flex align-items-center" href="#">Setting <i className="fa fa-wrench fa-fw ms-auto text-dark text-opacity-50" /></a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item d-flex align-items-center" href="#">Log Out <i className="fa fa-toggle-off fa-fw ms-auto text-dark text-opacity-50" /></a>
                </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Header;
