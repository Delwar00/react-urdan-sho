import React from 'react'

const Products = () => {
  return (
    <>
    <h4>Products</h4><hr></hr>
    <button class="btn1" type="submit">Add New Category</button><br /><br />
    <div class="table_page table-responsive">
        <table>
            <thead>
                <tr>
                    <th>Order</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total</th>
                    <th>Actions</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>May 10, 2018</td>
                        <td><span class="success">Completed</span></td>
                        <td>$25.00 for 1 item </td>
                        <td><a href="cart.html" class="view">view</a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>May 10, 2018</td>
                        <td>Processing</td>
                        <td>$17.00 for 1 item </td>
                        <td><a href="cart.html" class="view">view</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br></br>
        <div class="account_login_form">
            <form action="#">
                <p>Add New Category</p>
                <div class="default-form-box mb-20">
                    <label>First Name</label>
                    <input type="text" name="first-name" />
                </div>
                <button class="btn1" type="submit">Add New Category</button>
            </form>
         </div>              
    </>
  )
}

export default Products