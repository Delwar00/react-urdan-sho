import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <>
         <section>
            <div class="account-dashboard pt-100px pb-100px">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-3 col-lg-3">
                            <div class="dashboard_tab_button" data-aos="fade-up" data-aos-delay="0">
                                <ul role="tablist" class="nav flex-column dashboard-list">
                                    <li><Link to="/admin/dashboard" data-bs-toggle="tab" class="nav-link active">Dashboard</Link></li>
                                    <li> <Link to="/admin/products" data-bs-toggle="tab" class="nav-link">Products</Link></li>
                                    <li><Link to="/admin/categories" data-bs-toggle="tab" class="nav-link">Categories</Link></li>
                                    <li><Link to="/admin/tags" data-bs-toggle="tab" class="nav-link">Tags</Link></li>
                                    <li><Link to="#account-details" data-bs-toggle="tab" class="nav-link">Account details</Link>
                                    </li>
                                    <li><a href="login.html" class="nav-link">logout</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-9 col-lg-9">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
         </section>
    </>
  )
}

export default Admin

{/* <section className='dash' style={{borderTop:'1px solid black'}}>
            <br />
            <Container>
                <Row>
                <Col md={3}>
                        <ul className='list-group'>
                        <li className='list-group-item'>
                            <Link to="/admin/dashboard">Dashboard</Link>
                        </li>
                        <li className='list-group-item'>
                            <Link to="/admin/products">Products</Link>
                        </li>
                        <li className='list-group-item'>
                            <Link to="/admin/categories">Category</Link>
                        </li>
                        <li className='list-group-item'>
                            <Link to="/admin/tags">Tags</Link>
                        </li>
                        </ul>
                    </Col>
                    <Col md={9}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
            <br />
        </section> */}