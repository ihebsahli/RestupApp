import React from 'react'
import Sidebar from '../layout/Sidebar'

function Dashboard() {
  return (
    <div class="layout-inner">
   
  <Sidebar/>

    <div class="layout-container">
        <nav class="layout-navbar navbar navbar-expand-lg align-items-lg-center bg-dark container-p-x" id="layout-navbar">

            <a href="index.html" class="navbar-brand app-brand demo d-lg-none py-0 mr-4">
                <span class="app-brand-logo demo">
                    <img src="assets/img/logo-dark.png" alt="Brand Logo" class="img-fluid"/>
                </span>
                <span class="app-brand-text demo font-weight-normal ml-2">Empire</span>
            </a>

            <div class="layout-sidenav-toggle navbar-nav d-lg-none align-items-lg-center mr-auto">
                <a class="nav-item nav-link px-0 mr-lg-4" href="javascript:">
                    <i class="ion ion-md-menu text-large align-middle"></i>
                </a>
            </div>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#layout-navbar-collapse">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="navbar-collapse collapse" id="layout-navbar-collapse">
                <hr class="d-lg-none w-100 my-2"/>

                <div class="navbar-nav align-items-lg-center">
                    <label class="nav-item navbar-text navbar-search-box p-0 active">
                        <i class="feather icon-search navbar-icon align-middle"></i>
                        <span class="navbar-search-input pl-2">
                            <input type="text" class="form-control navbar-text mx-2" placeholder="Search..."/>
                        </span>
                    </label>
                </div>

                <div class="navbar-nav align-items-lg-center ml-auto">
                    <div class="demo-navbar-notifications nav-item dropdown mr-lg-3">
                        <a class="nav-link dropdown-toggle hide-arrow" href="#" data-toggle="dropdown">
                            <i class="feather icon-bell navbar-icon align-middle"></i>
                            <span class="badge badge-danger badge-dot indicator"></span>
                            <span class="d-lg-none align-middle">&nbsp; Notifications</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <div class="bg-primary text-center text-white font-weight-bold p-3">
                                4 New Notifications
                            </div>
                            <div class="list-group list-group-flush">
                                <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                                    <div class="ui-icon ui-icon-sm feather icon-home bg-secondary border-0 text-white"></div>
                                    <div class="media-body line-height-condenced ml-3">
                                        <div class="text-dark">Login from 192.168.1.1</div>
                                        <div class="text-light small mt-1">
                                            Aliquam ex eros, imperdiet vulputate hendrerit et.
                                        </div>
                                        <div class="text-light small mt-1">12h ago</div>
                                    </div>
                                </a>

                                <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                                    <div class="ui-icon ui-icon-sm feather icon-user-plus bg-info border-0 text-white"></div>
                                    <div class="media-body line-height-condenced ml-3">
                                        <div class="text-dark">You have
                                            <strong>4</strong> new followers</div>
                                        <div class="text-light small mt-1">
                                            Phasellus nunc nisl, posuere cursus pretium nec, dictum vehicula tellus.
                                        </div>
                                    </div>
                                </a>

                                <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                                    <div class="ui-icon ui-icon-sm feather icon-power bg-danger border-0 text-white"></div>
                                    <div class="media-body line-height-condenced ml-3">
                                        <div class="text-dark">Server restarted</div>
                                        <div class="text-light small mt-1">
                                            19h ago
                                        </div>
                                    </div>
                                </a>

                                <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                                    <div class="ui-icon ui-icon-sm feather icon-alert-triangle bg-warning border-0 text-dark"></div>
                                    <div class="media-body line-height-condenced ml-3">
                                        <div class="text-dark">99% server load</div>
                                        <div class="text-light small mt-1">
                                            Etiam nec fringilla magna. Donec mi metus.
                                        </div>
                                        <div class="text-light small mt-1">
                                            20h ago
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <a href="javascript:" class="d-block text-center text-light small p-2 my-1">Show all notifications</a>
                        </div>
                    </div>

                    <div class="demo-navbar-messages nav-item dropdown mr-lg-3">
                        <a class="nav-link dropdown-toggle hide-arrow" href="#" data-toggle="dropdown">
                            <i class="feather icon-mail navbar-icon align-middle"></i>
                            <span class="badge badge-success badge-dot indicator"></span>
                            <span class="d-lg-none align-middle">&nbsp; Messages</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <div class="bg-primary text-center text-white font-weight-bold p-3">
                                4 New Messages
                            </div>
                            <div class="list-group list-group-flush">
                                <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                                    <img src="assets/img/avatars/6-small.png" class="d-block ui-w-40 rounded-circle" alt/>
                                    <div class="media-body ml-3">
                                        <div class="text-dark line-height-condenced">Lorem ipsum dolor consectetuer elit.</div>
                                        <div class="text-light small mt-1">
                                            Josephin Doe &nbsp;·&nbsp; 58m ago
                                        </div>
                                    </div>
                                </a>

                                <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                                    <img src="assets/img/avatars/4-small.png" class="d-block ui-w-40 rounded-circle" alt/>
                                    <div class="media-body ml-3">
                                        <div class="text-dark line-height-condenced">Lorem ipsum dolor sit amet, consectetuer.</div>
                                        <div class="text-light small mt-1">
                                            Lary Doe &nbsp;·&nbsp; 1h ago
                                        </div>
                                    </div>
                                </a>

                                <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                                    <img src="assets/img/avatars/5-small.png" class="d-block ui-w-40 rounded-circle" alt/>
                                    <div class="media-body ml-3">
                                        <div class="text-dark line-height-condenced">Lorem ipsum dolor sit amet elit.</div>
                                        <div class="text-light small mt-1">
                                            Alice &nbsp;·&nbsp; 2h ago
                                        </div>
                                    </div>
                                </a>

                                <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                                    <img src="assets/img/avatars/11-small.png" class="d-block ui-w-40 rounded-circle" alt/>
                                    <div class="media-body ml-3">
                                        <div class="text-dark line-height-condenced">Lorem ipsum dolor sit amet consectetuer amet elit dolor sit.</div>
                                        <div class="text-light small mt-1">
                                            Suzen &nbsp;·&nbsp; 5h ago
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <a href="javascript:" class="d-block text-center text-light small p-2 my-1">Show all messages</a>
                        </div>
                    </div>

                    <div class="nav-item d-none d-lg-block text-big font-weight-light line-height-1 opacity-25 mr-3 ml-1">|</div>
                    <div class="demo-navbar-user nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                            <span class="d-inline-flex flex-lg-row-reverse align-items-center align-middle">
                                <img src="assets/img/avatars/1.png" alt class="d-block ui-w-30 rounded-circle"/>
                                <span class="px-1 mr-lg-2 ml-2 ml-lg-0">Cindy Deitch</span>
                            </span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a href="javascript:" class="dropdown-item">
                                <i class="feather icon-user text-muted"></i> &nbsp; My profile</a>
                            <a href="javascript:" class="dropdown-item">
                                <i class="feather icon-mail text-muted"></i> &nbsp; Messages</a>
                            <a href="javascript:" class="dropdown-item">
                                <i class="feather icon-settings text-muted"></i> &nbsp; Account settings</a>
                            <div class="dropdown-divider"></div>
                            <a href="javascript:" class="dropdown-item">
                                <i class="feather icon-power text-danger"></i> &nbsp; Log Out</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <div class="layout-content">

            <div class="container-fluid flex-grow-1 container-p-y">
                <h4 class="font-weight-bold py-3 mb-0">Dashboard</h4>
                <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#"><i class="feather icon-home"></i></a></li>
                        <li class="breadcrumb-item"><a href="#">Library</a></li>
                        <li class="breadcrumb-item active">Data</li>
                    </ol>
                </div>
                <div class="row">
                    <div class="col-lg-5">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="">
                                                <h2 class="mb-2"> 256 </h2>
                                                <p class="text-muted mb-0"><span class="badge badge-primary">Revenue</span> Today</p>
                                            </div>
                                            <div class="lnr lnr-leaf display-4 text-primary"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="">
                                                <h2 class="mb-2">8451</h2>
                                                <p class="text-muted mb-0"><span class="badge badge-success">20%</span> Stock</p>
                                            </div>
                                            <div class="lnr lnr-chart-bars display-4 text-success"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="">
                                                <h2 class="mb-2"> 31% <small></small></h2>
                                                <p class="text-muted mb-0">New <span class="badge badge-danger">20%</span> Customer</p>
                                            </div>
                                            <div class="lnr lnr-rocket display-4 text-danger"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="">
                                                <h2 class="mb-2">158</h2>
                                                <p class="text-muted mb-0"><span class="badge badge-warning">$143.45</span> Profit</p>
                                            </div>
                                            <div class="lnr lnr-cart display-4 text-warning"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="card d-flex w-100 mb-4">
                                    <div class="row no-gutters row-bordered row-border-light h-100">
                                        <div class="d-flex col-md-6 align-items-center">
                                            <div class="card-body">
                                                <div class="row align-items-center mb-3">
                                                    <div class="col-auto">
                                                        <i class="lnr lnr-users text-primary display-4"></i>
                                                    </div>
                                                    <div class="col">
                                                        <h6 class="mb-0 text-muted">Unique <span class="text-primary">Visitors</span></h6>
                                                        <h4 class="mt-3 mb-0">652<i class="ion ion-md-arrow-round-down ml-3 text-danger"></i></h4>
                                                    </div>
                                                </div>
                                                <p class="mb-0 text-muted">36% From Last 6 Months</p>
                                            </div>
                                        </div>
                                        <div class="d-flex col-md-6 align-items-center">
                                            <div class="card-body">
                                                <div class="row align-items-center mb-3">
                                                    <div class="col-auto">
                                                        <i class="lnr lnr-magic-wand text-primary display-4"></i>
                                                    </div>
                                                    <div class="col">
                                                        <h6 class="mb-0 text-muted">Monthly <span class="text-primary">Earnings</span></h6>
                                                        <h4 class="mt-3 mb-0">5963<i class="ion ion-md-arrow-round-up ml-3 text-success"></i></h4>
                                                    </div>
                                                </div>
                                                <p class="mb-0 text-muted">36% From Last 6 Months</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="card mb-4">
                            <div class="card-header with-elements">
                                <h6 class="card-header-title mb-0">Statistics</h6>
                                <div class="card-header-elements ml-auto">
                                    <label class="text m-0">
                                        <span class="text-light text-tiny font-weight-semibold align-middle">SHOW STATS</span>
                                        <span class="switcher switcher-primary switcher-sm d-inline-block align-middle mr-0 ml-2">
                                            <input type="checkbox" class="switcher-input" checked/><span class="switcher-indicator"><span class="switcher-yes"></span><span
                                                    class="switcher-no"></span></span></span>
                                    </label>
                                </div>
                            </div>
                            <div class="card-body">
                                <div id="statistics-chart-1" style={{height:"300px"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="card d-flex w-100 mb-4">
                            <div class="row no-gutters row-bordered row-border-light h-100">
                                <div class="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center">
                                    <div class="card-body media align-items-center text-dark">
                                        <i class="lnr lnr-diamond display-4 d-block text-primary"></i>
                                        <span class="media-body d-block ml-3"><span class="text-big mr-1 text-primary">$1584.78</span>
                                            <br/>
                                            <small class="text-muted">Earned this month</small>
                                        </span>
                                    </div>
                                </div>
                                <div class="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center">
                                    <div class="card-body media align-items-center text-dark">
                                        <i class="lnr lnr-clock display-4 d-block text-warning"></i>
                                        <span class="media-body d-block ml-3"><span class="text-big"><span class="mr-1 text-warning">152</span>Working Hours</span>
                                            <br/>
                                            <small class="text-muted">Spent this month</small>
                                        </span>
                                    </div>
                                </div>
                                <div class="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center">
                                    <div class="card-body media align-items-center text-dark">
                                        <i class="lnr lnr-hourglass display-4 d-block text-danger"></i>
                                        <span class="media-body d-block ml-3"><span class="text-big"><span class="mr-1 text-danger">54</span> Tasks</span>
                                            <br/>
                                            <small class="text-muted">Completed this month</small>
                                        </span>
                                    </div>
                                </div>
                                <div class="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center">
                                    <div class="card-body media align-items-center text-dark">
                                        <i class="lnr lnr-license display-4 d-block text-success"></i>
                                        <span class="media-body d-block ml-3"><span class="text-big"><span class="mr-1 text-success">6</span> Projects</span>
                                            <br/>
                                            <small class="text-muted">Done this month</small>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="card mb-4 bg-pattern-3 bg-primary text-white">
                                    <div class="card-body">
                                        <div class="d-flex align-items-center">
                                            <div class="lnr lnr-cart display-4"></div>
                                            <div class="ml-3">
                                                <div class="small">Monthly sales</div>
                                                <div class="text-large">2362</div>
                                            </div>
                                        </div>
                                        <div id="order-chart-1" class="mt-3 chart-shadow" style={{height:"70px"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card mb-4 bg-pattern-3-dark">
                                    <div class="card-body">
                                        <div class="d-flex align-items-center">
                                            <div class="lnr lnr-gift display-4 text-primary"></div>
                                            <div class="ml-3">
                                                <div class="text-muted small">Products</div>
                                                <div class="text-large">985</div>
                                            </div>
                                        </div>
                                        <div id="ecom-chart-3" class="mt-3 chart-shadow-primary" style={{height:"70px"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-5">
                        <div class="card mb-4">
                            <div class="card-header with-elements">
                                <h6 class="card-header-title mb-0">Tasks</h6>
                                <div class="card-header-elements ml-auto">
                                    <button type="button" class="btn btn-default btn-xs md-btn-flat">Show more</button>
                                </div>
                            </div>
                            <div style={{height:"300px"}} id="tasks-inner">
                                <div class="card-body">
                                    <p class="text-muted small">Today</p>
                                    <div class="custom-controls-stacked">
                                        <label class="ui-todo-item custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input"/>
                                            <span class="custom-control-label">Buy products</span>
                                            <span class="ui-todo-badge badge badge-outline-default font-weight-normal ml-2">58 mins left</span>
                                        </label>
                                        <label class="ui-todo-item custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input"/>
                                            <span class="custom-control-label">Reply to emails</span>
                                        </label>
                                        <label class="ui-todo-item custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input"/>
                                            <span class="custom-control-label">Write blog post</span>
                                            <span class="ui-todo-badge badge badge-outline-default font-weight-normal ml-2">20 hours left</span>
                                        </label>
                                        <label class="ui-todo-item custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" checked/>
                                            <span class="custom-control-label">Wash my car</span>
                                        </label>
                                    </div>
                                </div>
                                <hr class="m-0"/>
                                <div class="card-body">
                                    <p class="text-muted small">Tomorrow</p>
                                    <div class="custom-controls-stacked">
                                        <label class="ui-todo-item custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input"/>
                                            <span class="custom-control-label">Buy antivirus</span>
                                        </label>
                                        <label class="ui-todo-item custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input"/>
                                            <span class="custom-control-label">Jane's Happy Birthday</span>
                                        </label>
                                        <label class="ui-todo-item custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input"/>
                                            <span class="custom-control-label">Call mom</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Type your task"/>
                                    <div class="input-group-append">
                                        <button type="button" class="btn btn-primary">Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7">
                        <div class="card mb-4">
                            <div class="card-header with-elements pb-0">
                                <h6 class="card-header-title mb-0">Customer details</h6>
                                <div class="card-header-elements ml-auto p-0">
                                    <ul class="nav nav-tabs">
                                        <li class="nav-item">
                                            <a class="nav-link active" data-toggle="tab" href="#sale-stats">Sale stats</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-toggle="tab" href="#latest-sales">Latest sales</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="nav-tabs-top">
                                <div class="tab-content">
                                    <div class="tab-pane fade show active" id="sale-stats">
                                        <div style={{height:"300px"}} id="tab-table-1">
                                            <table class="table table-hover card-table">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            <label class="custom-control custom-checkbox mb-0">
                                                                <input type="checkbox" class="custom-control-input"/>
                                                                <span class="custom-control-label"><strong>Due</strong></span>
                                                            </label>
                                                        </th>
                                                        <th>User</th>
                                                        <th>Description</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <label class="custom-control custom-checkbox mb-0">
                                                                <input type="checkbox" class="custom-control-input"/>
                                                                <span class="custom-control-label"><strong>12</strong><br/><span>hour</span></span>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <div class="media mb-0">
                                                                <img src="assets/img/avatars/3-small.png" class="d-block ui-w-40 rounded-circle" alt=""/>
                                                                <div class="media-body align-self-center ml-3">
                                                                    <h6 class="mb-0">John Deo</h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="d-inline-block align-middle">
                                                                <h6 class="mb-1">[#1183] Workaround for OS X selects printing bug</h6>
                                                                <p class="text-muted mb-0">Chrome fixed the bug several versions ago, thus rendering this...</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label class="custom-control custom-checkbox mb-0">
                                                                <input type="checkbox" class="custom-control-input"/>
                                                                <span class="custom-control-label"><strong>16</strong><br/><span>hour</span></span>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <div class="media mb-0">
                                                                <img src="assets/img/avatars/1-small.png" class="d-block ui-w-40 rounded-circle" alt=""/>
                                                                <div class="media-body align-self-center ml-3">
                                                                    <h6 class="mb-0">Jems Win</h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="d-inline-block align-middle">
                                                                <h6 class="mb-1">[#1249] Vertically center carousel controls</h6>
                                                                <p class="text-muted mb-0">Try any carousel control and reduce the screen width below...</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label class="custom-control custom-checkbox mb-0">
                                                                <input type="checkbox" class="custom-control-input"/>
                                                                <span class="custom-control-label"><strong>40</strong><br/><span>hour</span></span>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <div class="media mb-0">
                                                                <img src="assets/img/avatars/1-small.png" class="d-block ui-w-40 rounded-circle" alt=""/>
                                                                <div class="media-body align-self-center ml-3">
                                                                    <h6 class="mb-0">Jems Wiliiam</h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="d-inline-block align-middle">
                                                                <h6 class="mb-1">[#1254] Inaccurate small pagination height</h6>
                                                                <p class="text-muted mb-0">The height of pagination elements is not consistent with...</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label class="custom-control custom-checkbox mb-0">
                                                                <input type="checkbox" class="custom-control-input"/>
                                                                <span class="custom-control-label"><strong>12</strong><br/><span>hour</span></span>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <div class="media mb-0">
                                                                <img src="assets/img/avatars/3-small.png" class="d-block ui-w-40 rounded-circle" alt=""/>
                                                                <div class="media-body align-self-center ml-3">
                                                                    <h6 class="mb-0">John Deo</h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="d-inline-block align-middle">
                                                                <h6 class="mb-1">[#1183] Workaround for OS X selects printing bug</h6>
                                                                <p class="text-muted mb-0">Chrome fixed the bug several versions ago, thus rendering this...</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label class="custom-control custom-checkbox mb-0">
                                                                <input type="checkbox" class="custom-control-input"/>
                                                                <span class="custom-control-label"><strong>12</strong><br/><span>hour</span></span>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <div class="media mb-0">
                                                                <img src="assets/img/avatars/3-small.png" class="d-block ui-w-40 rounded-circle" alt=""/>
                                                                <div class="media-body align-self-center ml-3">
                                                                    <h6 class="mb-0">John Deo</h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="d-inline-block align-middle">
                                                                <h6 class="mb-1">[#1183] Workaround for OS X selects printing bug</h6>
                                                                <p class="text-muted mb-0">Chrome fixed the bug several versions ago, thus rendering this...</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label class="custom-control custom-checkbox mb-0">
                                                                <input type="checkbox" class="custom-control-input"/>
                                                                <span class="custom-control-label"><strong>16</strong><br/><span>hour</span></span>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <div class="media mb-0">
                                                                <img src="assets/img/avatars/1-small.png" class="d-block ui-w-40 rounded-circle" alt=""/>
                                                                <div class="media-body align-self-center ml-3">
                                                                    <h6 class="mb-0">Jems Win</h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="d-inline-block align-middle">
                                                                <h6 class="mb-1">[#1249] Vertically center carousel controls</h6>
                                                                <p class="text-muted mb-0">Try any carousel control and reduce the screen width below...</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label class="custom-control custom-checkbox mb-0">
                                                                <input type="checkbox" class="custom-control-input"/>
                                                                <span class="custom-control-label"><strong>40</strong><br/><span>hour</span></span>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <div class="media mb-0">
                                                                <img src="assets/img/avatars/1-small.png" class="d-block ui-w-40 rounded-circle" alt=""/>
                                                                <div class="media-body align-self-center ml-3">
                                                                    <h6 class="mb-0">Jems Wiliiam</h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="d-inline-block align-middle">
                                                                <h6 class="mb-1">[#1254] Inaccurate small pagination height</h6>
                                                                <p class="text-muted mb-0">The height of pagination elements is not consistent with...</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label class="custom-control custom-checkbox mb-0">
                                                                <input type="checkbox" class="custom-control-input"/>
                                                                <span class="custom-control-label"><strong>12</strong><br/><span>hour</span></span>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <div class="media mb-0">
                                                                <img src="assets/img/avatars/3-small.png" class="d-block ui-w-40 rounded-circle" alt=""/>
                                                                <div class="media-body align-self-center ml-3">
                                                                    <h6 class="mb-0">John Deo</h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="d-inline-block align-middle">
                                                                <h6 class="mb-1">[#1183] Workaround for OS X selects printing bug</h6>
                                                                <p class="text-muted mb-0">Chrome fixed the bug several versions ago, thus rendering this...</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <a href="javascript:" class="card-footer d-block text-center text-dark small font-weight-semibold">SHOW MORE</a>
                                    </div>
                                    <div class="tab-pane fade" id="latest-sales">
                                        <div style={{height:"300px"}} id="tab-table-2">
                                            <table class="table table-hover card-table">
                                                <thead>
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Qty.</th>
                                                        <th>Sum.</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="align-middle">
                                                            <a href="javascript:" class="text-dark">PlayStation 4 1TB (Jet Black)</a>
                                                        </td>
                                                        <td class="align-middle">1</td>
                                                        <td class="align-middle">$480.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="align-middle">
                                                            <a href="javascript:" class="text-dark">Nike Men Black Liteforce III Sneakers</a>
                                                        </td>
                                                        <td class="align-middle">2</td>
                                                        <td class="align-middle">$115.1</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="align-middle">
                                                            <a href="javascript:" class="text-dark">Wireless headphones</a>
                                                        </td>
                                                        <td class="align-middle">1</td>
                                                        <td class="align-middle">$235.55</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="align-middle">
                                                            <a href="javascript:" class="text-dark">HERO ATHLETES BAG</a>
                                                        </td>
                                                        <td class="align-middle">1</td>
                                                        <td class="align-middle">$160.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="align-middle">
                                                            <a href="javascript:" class="text-dark">POÄNG</a>
                                                        </td>
                                                        <td class="align-middle">3</td>
                                                        <td class="align-middle">$477.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="align-middle">
                                                            <a href="javascript:" class="text-dark">Apple iWatch (black)</a>
                                                        </td>
                                                        <td class="align-middle">1</td>
                                                        <td class="align-middle">$399.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="align-middle">
                                                            <a href="javascript:" class="text-dark">WALKING 400 BLUE CAT3</a>
                                                        </td>
                                                        <td class="align-middle">2</td>
                                                        <td class="align-middle">$41.1</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="align-middle">
                                                            <a href="javascript:" class="text-dark">Wireless headphones</a>
                                                        </td>
                                                        <td class="align-middle">1</td>
                                                        <td class="align-middle">$235.55</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="align-middle">
                                                            <a href="javascript:" class="text-dark">HERO ATHLETES BAG</a>
                                                        </td>
                                                        <td class="align-middle">1</td>
                                                        <td class="align-middle">$160.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="align-middle">
                                                            <a href="javascript:" class="text-dark">POÄNG</a>
                                                        </td>
                                                        <td class="align-middle">3</td>
                                                        <td class="align-middle">$477.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <a href="javascript:" class="card-footer d-block text-center text-dark small font-weight-semibold">SHOW MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>

            <nav class="layout-footer footer bg-white">
                <div class="container-fluid d-flex flex-wrap justify-content-between text-center container-p-x pb-3">
                    <div class="pt-3">
                        <span class="footer-text font-weight-semibold">&copy; <a href="https://srthemesvilla.com" class="footer-link" target="_blank">Srthemesvilla</a></span>
                    </div>
                    <div>
                        <a href="javascript:" class="footer-link pt-3">About Us</a>
                        <a href="javascript:" class="footer-link pt-3 ml-4">Help</a>
                        <a href="javascript:" class="footer-link pt-3 ml-4">Contact</a>
                        <a href="javascript:" class="footer-link pt-3 ml-4">Terms &amp; Conditions</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</div>
  )
}

export default Dashboard
