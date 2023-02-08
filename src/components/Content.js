import React, { Component } from 'react'

class Content extends Component {
  render() {
    return (
        <div id="content" className="app-content">
            <h1 className="page-header mb-3">
                Hi, Sean. <small>here's what's happening with your store today.</small>
            </h1>
            <div className="row">
                <div className="col-xl-6 mb-3">
                <div className="card text-white text-opacity-70 h-100 overflow-hidden">
                    <div className="card-img-overlay d-block d-lg-none bg-blue rounded" />
                    <div className="card-img-overlay d-none d-md-block bg-blue rounded mb-n1 mx-n1" style={{backgroundImage: 'url(assets/img/bg/wave-bg.png)', backgroundPosition: 'right bottom', backgroundRepeat: 'no-repeat', backgroundSize: '100%'}}>
                    </div>
                    <div className="card-img-overlay d-none d-md-block bottom-0 top-auto">
                    <div className="row">
                        <div className="col-md-8 col-xl-6" />
                        <div className="col-md-4 col-xl-6 mb-n2">
                        <img src="assets/img/page/dashboard.svg" alt className="d-block ms-n3 mb-5" style={{maxHeight: 310}} />
                        </div>
                    </div>
                    </div>
                    <div className="card-body position-relative">
                    <div className="row">
                        <div className="col-md-8">
                        <div className="d-flex">
                            <div className="me-auto">
                            <h5 className="text-white text-opacity-80 mb-3">Weekly Earning</h5>
                            <h3 className="text-white mt-n1 mb-1">$2,999.80</h3>
                            <p className="mb-1 text-white text-opacity-60 text-truncate">
                                <i className="fa fa-caret-up" /> <b>32%</b> increase compare to last week
                            </p>
                            </div>
                        </div>
                        <hr className="bg-white bg-opacity-75 mt-3 mb-3" />
                        <div className="row">
                            <div className="col-6 col-lg-5">
                            <div className="mt-1">
                                <i className="fa fa-fw fa-shopping-bag fs-28px text-black text-opacity-50" />
                            </div>
                            <div className="mt-1">
                                <div>Store Sales</div>
                                <div className="fw-600 text-white">$1,629.80</div>
                            </div>
                            </div>
                            <div className="col-6 col-lg-5">
                            <div className="mt-1">
                                <i className="fa fa-fw fa-retweet fs-28px text-black text-opacity-50" />
                            </div>
                            <div className="mt-1">
                                <div>Referral Sales</div>
                                <div className="fw-600 text-white">$700.00</div>
                            </div>
                            </div>
                        </div>
                        <hr className="bg-white bg-opacity-75 mt-3 mb-3" />
                        <div className="mt-3 mb-2">
                            <a href="#" className="btn btn-yellow btn-rounded btn-sm ps-5 pe-5 pt-2 pb-2 fs-14px fw-600"><i className="fa fa-wallet me-2 ms-n2" /> Withdraw money</a>
                        </div>
                        <p className="fs-12px">
                            It usually takes 3-5 business days for transferring the earning to your bank
                            account.
                        </p>
                        </div>
                        <div className="col-md-4 d-none d-md-block" style={{minHeight: 380}} />
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-6">
                <div className="row">
                    <div className="col-sm-6">
                    <div className="card mb-3 overflow-hidden fs-13px border-0 bg-gradient-custom-orange" style={{minHeight: 199}}>
                        <div className="card-img-overlay mb-n4 me-n4 d-flex" style={{bottom: 0, top: 'auto'}}>
                        <img src="assets/img/icon/order.svg" alt className="ms-auto d-block mb-n3" style={{maxHeight: 105}} />
                        </div>
                        <div className="card-body position-relative">
                        <h5 className="text-white text-opacity-80 mb-3 fs-16px">New Orders</h5>
                        <h3 className="text-white mt-n1">56</h3>
                        <div className="progress bg-black bg-opacity-50 mb-2" style={{height: 6}}>
                            <div className="progrss-bar progress-bar-striped bg-white" style={{width: '80%'}} />
                        </div>
                        <div className="text-white text-opacity-80 mb-4"><i className="fa fa-caret-up" /> 16%
                            increase <br />compare to last week</div>
                        <div><a href="#" className="text-white d-flex align-items-center text-decoration-none">View
                            report <i className="fa fa-chevron-right ms-2 text-white text-opacity-50" /></a>
                        </div>
                        </div>
                    </div>
                    <div className="card mb-3 overflow-hidden fs-13px border-0 bg-gradient-custom-teal" style={{minHeight: 199}}>
                        <div className="card-img-overlay mb-n4 me-n4 d-flex" style={{bottom: 0, top: 'auto'}}>
                        <img src="assets/img/icon/visitor.svg" alt className="ms-auto d-block mb-n3" style={{maxHeight: 105}} />
                        </div>
                        <div className="card-body position-relative">
                        <h5 className="text-white text-opacity-80 mb-3 fs-16px">Page Visitors</h5>
                        <h3 className="text-white mt-n1">60.5k</h3>
                        <div className="progress bg-black bg-opacity-50 mb-2" style={{height: 6}}>
                            <div className="progrss-bar progress-bar-striped bg-white" style={{width: '50%'}} />
                        </div>
                        <div className="text-white text-opacity-80 mb-4"><i className="fa fa-caret-up" /> 33%
                            increase <br />compare to last week</div>
                        <div><a href="#" className="text-white d-flex align-items-center text-decoration-none">View
                            report <i className="fa fa-chevron-right ms-2 text-white text-opacity-50" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="card mb-3 overflow-hidden fs-13px border-0 bg-gradient-custom-pink" style={{minHeight: 199}}>
                        <div className="card-img-overlay mb-n4 me-n4 d-flex" style={{bottom: 0, top: 'auto'}}>
                        <img src="assets/img/icon/email.svg" alt className="ms-auto d-block mb-n3" style={{maxHeight: 105}} />
                        </div>
                        <div className="card-body position-relative">
                        <h5 className="text-white text-opacity-80 mb-3 fs-16px">Unread email</h5>
                        <h3 className="text-white mt-n1">30</h3>
                        <div className="progress bg-black bg-opacity-50 mb-2" style={{height: 6}}>
                            <div className="progrss-bar progress-bar-striped bg-white" style={{width: '80%'}} />
                        </div>
                        <div className="text-white text-opacity-80 mb-4"><i className="fa fa-caret-down" /> 5%
                            decrease <br />compare to last week</div>
                        <div><a href="#" className="text-white d-flex align-items-center text-decoration-none">View
                            report <i className="fa fa-chevron-right ms-2 text-white text-opacity-50" /></a>
                        </div>
                        </div>
                    </div>
                    <div className="card mb-3 overflow-hidden fs-13px border-0 bg-gradient-custom-indigo" style={{minHeight: 199}}>
                        <div className="card-img-overlay mb-n4 me-n4 d-flex" style={{bottom: 0, top: 'auto'}}>
                        <img src="assets/img/icon/browser.svg" alt className="ms-auto d-block mb-n3" style={{maxHeight: 105}} />
                        </div>
                        <div className="card-body position-relative">
                        <h5 className="text-white text-opacity-80 mb-3 fs-16px">Page Views</h5>
                        <h3 className="text-white mt-n1">320.4k</h3>
                        <div className="progress bg-black bg-opacity-50 mb-2" style={{height: 6}}>
                            <div className="progrss-bar progress-bar-striped bg-white" style={{width: '80%'}} />
                        </div>
                        <div className="text-white text-opacity-80 mb-4"><i className="fa fa-caret-up" /> 20%
                            increase <br />compare to last week</div>
                        <div><a href="#" className="text-white d-flex align-items-center text-decoration-none">View
                            report <i className="fa fa-chevron-right ms-2 text-white text-opacity-50" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6">
                <div className="row">
                    <div className="col-sm-6 mb-3 d-flex flex-column">
                    <div className="card mb-3 flex-1">
                        <div className="card-body">
                        <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                            <h5 className="mb-1">Total Users</h5>
                            <div>Store user account registration</div>
                            </div>
                            <a href="#" data-bs-toggle="dropdown" className="text-muted"><i className="fa fa-redo" /></a>
                        </div>
                        <div className="d-flex">
                            <div className="flex-grow-1">
                            <h3 className="mb-1">184,593</h3>
                            <div className="text-success fw-600 fs-13px">
                                <i className="fa fa-caret-up" /> +3.59%
                            </div>
                            </div>
                            <div className="w-50px h-50px bg-primary bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center">
                            <i className="fa fa-user fa-lg text-primary" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                        <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                            <h5 className="mb-1">Social Media</h5>
                            <div>Facebook page stats overview</div>
                            </div>
                            <a href="#" data-bs-toggle="dropdown" className="text-muted"><i className="fa fa-redo" /></a>
                        </div>
                        <div className="row">
                            <div className="col-6 text-center">
                            <div className="w-50px h-50px bg-primary bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center mb-2 ms-auto me-auto">
                                <i className="fa fa-thumbs-up fa-lg text-primary" />
                            </div>
                            <div className="fw-600 text-dark">306.5k</div>
                            <div className="fs-13px">Likes</div>
                            </div>
                            <div className="col-6 text-center">
                            <div className="w-50px h-50px bg-primary bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center mb-2 ms-auto me-auto">
                                <i className="fa fa-comments fa-lg text-primary" />
                            </div>
                            <div className="fw-600 text-dark">27.5k</div>
                            <div className="fs-13px">Comments</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                    <div className="card h-100">
                        <div className="card-body">
                        <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                            <h5 className="mb-1">Web Traffic</h5>
                            <div className="fs-13px">Traffic source and category</div>
                            </div>
                            <a href="#" data-bs-toggle="dropdown" className="text-muted"><i className="fa fa-redo" /></a>
                        </div>
                        <div className="mb-4">
                            <h3 className="mb-1">320,958</h3>
                            <div className="text-success fs-13px fw-600">
                            <i className="fa fa-caret-up" /> +20.9%
                            </div>
                        </div>
                        <div className="progress mb-4" style={{height: 10}}>
                            <div className="progress-bar" style={{width: '42.66%'}} />
                            <div className="progress-bar bg-teal" style={{width: '36.80%'}} />
                            <div className="progress-bar bg-yellow" style={{width: '15.34%'}} />
                            <div className="progress-bar bg-pink" style={{width: '9.20%'}} />
                            <div className="progress-bar bg-gray-200" style={{width: '5.00%'}} />
                        </div>
                        <div className="fs-13px">
                            <div className="d-flex align-items-center mb-2">
                            <div className="flex-grow-1 d-flex align-items-center">
                                <i className="fa fa-circle fs-9px fa-fw text-primary me-2" /> Direct visit
                            </div>
                            <div className="fw-600 text-dark">42.66%</div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                            <div className="flex-grow-1 d-flex align-items-center">
                                <i className="fa fa-circle fs-9px fa-fw text-teal me-2" /> Organic Search
                            </div>
                            <div className="fw-600 text-dark">36.80%</div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                            <div className="flex-grow-1 d-flex align-items-center">
                                <i className="fa fa-circle fs-9px fa-fw text-warning me-2" /> Referral
                                Website
                            </div>
                            <div className="fw-600 text-dark">15.34%</div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                            <div className="flex-grow-1 d-flex align-items-center">
                                <i className="fa fa-circle fs-9px fa-fw text-danger me-2" /> Social
                                Networks
                            </div>
                            <div className="fw-600 text-dark">9.20%</div>
                            </div>
                            <div className="d-flex align-items-center mb-15px">
                            <div className="flex-grow-1 d-flex align-items-center">
                                <i className="fa fa-circle fs-9px fa-fw text-gray-200 me-2" /> Others
                            </div>
                            <div className="fw-600 text-dark">5.00%</div>
                            </div>
                            <div className="fs-12px text-end">
                            <span className="fs-10px">powered by </span>
                            <span className="d-inline-flex fw-600">
                                <span className="text-primary">G</span>
                                <span className="text-danger">o</span>
                                <span className="text-warning">o</span>
                                <span className="text-primary">g</span>
                                <span className="text-green">l</span>
                                <span className="text-danger">e</span>
                            </span>
                            <span className="fs-10px">Analytics API</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-6 mb-3">
                <div className="card h-100">
                    <div className="card-body">
                    <div className="d-flex mb-3">
                        <div className="flex-grow-1">
                        <h5 className="mb-1">Sales Analytics</h5>
                        <div className="fs-13px">Weekly sales performance chart</div>
                        </div>
                        <a href="#" data-bs-toggle="dropdown" className="text-muted"><i className="fa fa-redo" /></a>
                    </div>
                    <div id="chart" />
                    </div>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 mb-3">
                <div className="card h-100">
                    <div className="card-body">
                    <div className="d-flex align-items-center mb-4">
                        <div className="flex-grow-1">
                        <h5 className="mb-1">Bestseller</h5>
                        <div className="fs-13px">Top 3 product sales this week</div>
                        </div>
                        <a href="#" className="text-decoration-none">See All</a>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <div className="d-flex align-items-center justify-content-center me-3 w-50px h-50px">
                        <img src="assets/img/product/product-1.jpg" alt className="ms-100 mh-100" />
                        </div>
                        <div className="flex-grow-1">
                        <div>
                            <div className="text-primary fs-10px fw-600">TOP SALES</div>
                            <div className="text-dark fw-600">iPhone 11 Pro Max (256GB)</div>
                            <div className="fs-13px">$1,099</div>
                        </div>
                        </div>
                        <div className="ps-3 text-center">
                        <div className="text-dark fw-600">382</div>
                        <div className="fs-13px">sales</div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <div className="d-flex align-items-center justify-content-center me-3 w-50px h-50px">
                        <img src="assets/img/product/product-2.jpg" alt className="ms-100 mh-100" />
                        </div>
                        <div className="flex-grow-1">
                        <div>
                            <div className="text-dark fw-600">Macbook Pro 13 inch (2021)</div>
                            <div className="fs-13px">$1,120</div>
                        </div>
                        </div>
                        <div className="ps-3 text-center">
                        <div className="text-dark fw-600">102</div>
                        <div className="fs-13px">sales</div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <div className="d-flex align-items-center justify-content-center me-3 w-50px h-50px">
                        <img src="assets/img/product/product-3.jpg" alt className="ms-100 mh-100" />
                        </div>
                        <div className="flex-grow-1">
                        <div>
                            <div className="text-dark fw-600">Apple Watch Series 4(2021)</div>
                            <div className="fs-13px">$349</div>
                        </div>
                        </div>
                        <div className="ps-3 text-center">
                        <div className="text-dark fw-600">75</div>
                        <div className="fs-13px">sales</div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <div className="d-flex align-items-center justify-content-center me-3 w-50px h-50px">
                        <img src="assets/img/product/product-4.jpg" alt className="ms-100 mh-100" />
                        </div>
                        <div className="flex-grow-1">
                        <div>
                            <div className="text-dark fw-600">12.9-inch iPad Pro (256GB)</div>
                            <div className="fs-13px">$1,099</div>
                        </div>
                        </div>
                        <div className="ps-3 text-center">
                        <div className="text-dark fw-600">62</div>
                        <div className="fs-13px">sales</div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center justify-content-center me-3 w-50px h-50px">
                        <img src="assets/img/product/product-5.jpg" alt className="ms-100 mh-100" />
                        </div>
                        <div className="flex-grow-1">
                        <div>
                            <div className="text-dark fw-600">iPhone 11 (128gb)</div>
                            <div className="fs-13px">$799</div>
                        </div>
                        </div>
                        <div className="ps-3 text-center">
                        <div className="text-dark fw-600">59</div>
                        <div className="fs-13px">sales</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-6 mb-3">
                <div className="card h-100">
                    <div className="card-body">
                    <div className="d-flex align-items-center mb-2">
                        <div className="flex-grow-1">
                        <h5 className="mb-1">Transaction</h5>
                        <div className="fs-13px">Latest transaction history</div>
                        </div>
                        <a href="#" className="text-decoration-none">See All</a>
                    </div>
                    <div className="table-responsive mb-n2">
                        <table className="table table-borderless mb-0">
                        <thead>
                            <tr className="text-dark">
                            <th className="ps-0">No</th>
                            <th>Order Details</th>
                            <th className="text-center">Status</th>
                            <th className="text-end pe-0">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="ps-0">1.</td>
                            <td>
                                <div className="d-flex align-items-center">
                                <div className="w-40px h-40px">
                                    <img src="assets/img/icon/paypal2.svg" alt className="ms-100 mh-100" />
                                </div>
                                <div className="ms-3 flex-grow-1">
                                    <div className="fw-600 text-dark">Macbook Pro 15 inch</div>
                                    <div className="fs-13px">5 minutes ago</div>
                                </div>
                                </div>
                            </td>
                            <td className="text-center"><span className="badge bg-success bg-opacity-20 text-success" style={{minWidth: 60}}>Success</span></td>
                            <td className="text-end pe-0">$1,699.00</td>
                            </tr>
                            <tr>
                            <td className="ps-0">2.</td>
                            <td>
                                <div className="d-flex align-items-center">
                                <div className="w-40px h-40px rounded">
                                    <img src="assets/img/icon/mastercard.svg" alt className="ms-100 mh-100" />
                                </div>
                                <div className="ms-3 flex-grow-1">
                                    <div className="fw-600 text-dark">Apple Watch 5 Series</div>
                                    <div className="fs-13px">5 minutes ago</div>
                                </div>
                                </div>
                            </td>
                            <td className="text-center"><span className="badge bg-success bg-opacity-20 text-success" style={{minWidth: 60}}>Success</span></td>
                            <td className="text-end pe-0">$699.00</td>
                            </tr>
                            <tr>
                            <td className="ps-0">3.</td>
                            <td>
                                <div className="d-flex align-items-center">
                                <div className="w-40px h-40px rounded">
                                    <img src="assets/img/icon/visa.svg" alt className="ms-100 mh-100" />
                                </div>
                                <div className="ms-3 flex-grow-1">
                                    <div className="fw-600 text-dark">iPhone 11 Pro Max</div>
                                    <div className="fs-13px">12 minutes ago</div>
                                </div>
                                </div>
                            </td>
                            <td className="text-center"><span className="badge bg-warning bg-opacity-20 text-warning" style={{minWidth: 60}}>Pending</span></td>
                            <td className="text-end pe-0">$1,299.00</td>
                            </tr>
                            <tr>
                            <td className="ps-0">4.</td>
                            <td>
                                <div className="d-flex align-items-center">
                                <div className="w-40px h-40px rounded">
                                    <img src="assets/img/icon/paypal2.svg" alt className="ms-100 mh-100" />
                                </div>
                                <div className="ms-3 flex-grow-1">
                                    <div className="fw-600 text-dark">Apple Magic Keyboard</div>
                                    <div className="fs-13px">15 minutes ago</div>
                                </div>
                                </div>
                            </td>
                            <td className="text-center"><span className="badge text-dark text-opacity-50 bg-dark bg-opacity-10" style={{minWidth: 60}}>Cancelled</span></td>
                            <td className="text-end pe-0">$199.00</td>
                            </tr>
                            <tr>
                            <td className="ps-0">5.</td>
                            <td>
                                <div className="d-flex align-items-center">
                                <div className="w-40px h-40px rounded">
                                    <img src="assets/img/icon/mastercard.svg" alt className="ms-100 mh-100" />
                                </div>
                                <div className="ms-3 flex-grow-1">
                                    <div className="fw-600 text-dark">iPad Pro 15 inch</div>
                                    <div className="fs-13px">15 minutes ago</div>
                                </div>
                                </div>
                            </td>
                            <td className="text-center"><span className="badge bg-success bg-opacity-20 text-success" style={{minWidth: 60}}>Cancelled</span></td>
                            <td className="text-end pe-0">$1,099.00</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
  }
}

export default Content;