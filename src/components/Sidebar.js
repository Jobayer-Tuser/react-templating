    import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
        <div id="sidebar" className="app-sidebar">
            <div className="app-sidebar-content" data-scrollbar="true" data-height="100%">
                <div className="menu">
                <div className="menu-header">Navigation</div>
                <div className="menu-item active">
                    <Link  className="menu-link" to="dashboard">
                    <span className="menu-icon"><i className="fa fa-laptop" /></span>
                    <span className="menu-text">Dashboard</span>
                    </Link>
                </div>
                <div className="menu-item active">
                    <Link  className="menu-link" to="filepond">
                    <span className="menu-icon"><i className="fa fa-laptop" /></span>
                    <span className="menu-text">FilePond</span>
                    </Link>
                </div>
                <div className="menu-item">
                    <Link to="registerForm" className="menu-link">
                    <span className="menu-icon"><i className="fa fa-file-alt" /></span>
                    <span className="menu-text">Form</span>
                    </Link>
                </div>
                <div className="menu-item has-sub">
                    <a href="#" className="menu-link">
                    <span className="menu-icon">
                        <i className="fa fa-envelope" />
                        <span className="menu-icon-label">6</span>
                    </span>
                    <span className="menu-text">Email</span>
                    <span className="menu-caret"><b className="caret" /></span>
                    </a>
                    <div className="menu-submenu">
                    <div className="menu-item">
                        <a href="email_inbox.html" className="menu-link">
                        <span className="menu-text">Inbox</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="email_compose.html" className="menu-link">
                        <span className="menu-text">Compose</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="email_detail.html" className="menu-link">
                        <span className="menu-text">Detail</span>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="menu-divider" />
                <div className="menu-header">Components</div>
                <div className="menu-item">
                    <a href="widgets.html" className="menu-link">
                    <span className="menu-icon"><i className="fa fa-qrcode" /></span>
                    <span className="menu-text">Widgets</span>
                    </a>
                </div>
                <div className="menu-item has-sub">
                    <a href="#" className="menu-link">
                    <span className="menu-icon"><i className="fa fa-heart" /></span>
                    <span className="menu-text">UI Kits</span>
                    <span className="menu-caret"><b className="caret" /></span>
                    </a>
                    <div className="menu-submenu">
                    <div className="menu-item">
                        <a href="ui_bootstrap.html" className="menu-link">
                        <span className="menu-text">Bootstrap</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="ui_buttons.html" className="menu-link">
                        <span className="menu-text">Buttons</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="ui_card.html" className="menu-link">
                        <span className="menu-text">Card</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="ui_icons.html" className="menu-link">
                        <span className="menu-text">Icons</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="ui_modal_notification.html" className="menu-link">
                        <span className="menu-text">Modal &amp; Notification</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="ui_typography.html" className="menu-link">
                        <span className="menu-text">Typography</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="ui_tabs_accordions.html" className="menu-link">
                        <span className="menu-text">Tabs &amp; Accordions</span>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="menu-item has-sub">
                    <a href="#" className="menu-link">
                    <span className="menu-icon"><i className="fa fa-file-alt" /></span>
                    <span className="menu-text">Forms</span>
                    <span className="menu-caret"><b className="caret" /></span>
                    </a>
                    <div className="menu-submenu">
                    <div className="menu-item">
                        <a href="form_elements.html" className="menu-link">
                        <span className="menu-text">Form Elements</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="form_plugins.html" className="menu-link">
                        <span className="menu-text">Form Plugins</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="form_wizards.html" className="menu-link">
                        <span className="menu-text">Wizards</span>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="menu-item has-sub">
                    <a href="#" className="menu-link">
                    <span className="menu-icon"><i className="fa fa-table" /></span>
                    <span className="menu-text">Tables</span>
                    <span className="menu-caret"><b className="caret" /></span>
                    </a>
                    <div className="menu-submenu">
                    <div className="menu-item">
                        <a href="table_elements.html" className="menu-link">
                        <span className="menu-text">Table Elements</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="table_plugins.html" className="menu-link">
                        <span className="menu-text">Table Plugins</span>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="menu-item has-sub">
                    <a href="#" className="menu-link">
                    <span className="menu-icon"><i className="fa fa-chart-bar" /></span>
                    <span className="menu-text">Charts</span>
                    <span className="menu-caret"><b className="caret" /></span>
                    </a>
                    <div className="menu-submenu">
                    <div className="menu-item">
                        <a href="chart_js.html" className="menu-link">
                        <span className="menu-text">Chart.js</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="chart_apex.html" className="menu-link">
                        <span className="menu-text">Apexcharts.js</span>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="menu-item">
                    <a href="map.html" className="menu-link">
                    <span className="menu-icon"><i className="fa fa-map-marker-alt" /></span>
                    <span className="menu-text">Map</span>
                    </a>
                </div>
                <div className="menu-item has-sub">
                    <a href="#" className="menu-link">
                    <span className="menu-icon"><i className="fa fa-code-branch" /></span>
                    <span className="menu-text">Layout</span>
                    <span className="menu-caret"><b className="caret" /></span>
                    </a>
                    <div className="menu-submenu">
                    <div className="menu-item">
                        <a href="layout_starter.html" className="menu-link">
                        <span className="menu-text">Starter Page</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="layout_fixed_footer.html" className="menu-link">
                        <span className="menu-text">Fixed Footer</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="layout_full_height.html" className="menu-link">
                        <span className="menu-text">Full Height</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="layout_full_width.html" className="menu-link">
                        <span className="menu-text">Full Width</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="layout_boxed_layout.html" className="menu-link">
                        <span className="menu-text">Boxed Layout</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="layout_minified_sidebar.html" className="menu-link">
                        <span className="menu-text">Minified Sidebar</span>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="menu-item has-sub">
                    <a href="#" className="menu-link">
                    <span className="menu-icon"><i className="fa fa-globe" /></span>
                    <span className="menu-text">Pages</span>
                    <span className="menu-caret"><b className="caret" /></span>
                    </a>
                    <div className="menu-submenu">
                    <div className="menu-item">
                        <a href="page_scrum_board.html" className="menu-link">
                        <span className="menu-text">Scrum Board</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="page_products.html" className="menu-link">
                        <span className="menu-text">Products</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="page_orders.html" className="menu-link">
                        <span className="menu-text">Orders</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="page_gallery.html" className="menu-link">
                        <span className="menu-text">Gallery</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="page_search_results.html" className="menu-link">
                        <span className="menu-text">Search Results</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="page_coming_soon.html" className="menu-link">
                        <span className="menu-text">Coming Soon Page</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="page_404_error.html" className="menu-link">
                        <span className="menu-text">404 Error Page</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="page_login.html" className="menu-link">
                        <span className="menu-text">Login</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="page_register.html" className="menu-link">
                        <span className="menu-text">Register</span>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="menu-divider" />
                <div className="menu-header">Users</div>
                <div className="menu-item">
                    <a href="profile.html" className="menu-link">
                    <span className="menu-icon"><i className="fa fa-user-circle" /></span>
                    <span className="menu-text">Profile</span>
                    </a>
                </div>
                <div className="menu-item">
                    <a href="calendar.html" className="menu-link">
                    <span className="menu-icon"><i className="fa fa-calendar" /></span>
                    <span className="menu-text">Calendar</span>
                    </a>
                </div>
                <div className="menu-item">
                    <a href="settings.html" className="menu-link">
                    <span className="menu-icon"><i className="fa fa-cog" /></span>
                    <span className="menu-text">Settings</span>
                    </a>
                </div>
                <div className="menu-item">
                    <a href="helper.html" className="menu-link">
                    <span className="menu-icon"><i className="fa fa-question-circle" /></span>
                    <span className="menu-text">Helper</span>
                    </a>
                </div>
                <div className="p-3 px-4 mt-auto hide-on-minified">
                    <a href="documentation/index.html" className="btn btn-secondary d-block w-100 fw-600 rounded-pill">
                    <i className="fa fa-code-branch me-1 ms-n1 opacity-5" /> Documentation
                    </a>
                </div>
                </div>
            </div>
            <button className="app-sidebar-mobile-backdrop" data-dismiss="sidebar-mobile" />
        </div>
    )
  }
}

export default Sidebar;
