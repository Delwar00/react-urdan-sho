import axios from 'axios';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Category = ({catShow,makeSlug,handleCloseButton,alert,setAlert}) => {

//cat form show hide
const[catFormShowHide,setCatFormShowHide]=useState(false);
const handleCatFormShowHide=()=>{
    setCatFormShowHide(true);
}
//cat set value
const[cat,setCat]=useState({
    id:'',
    name:''
});

//cat add
const handleCatAdd=(e)=>{
    e.preventDefault();
    setCatFormShowHide(false);
    if(cat.name===''){
        setAlert({
            msg:'All fields are Required!',
            type:'danger',
            status:true
        })
    }
    else{
        axios.post('http://localhost:5050/categories',{
        id:cat.id,
        name:cat.name,
        slug:makeSlug(cat.name)
    }).then(res=>{
        setCat({
            name:''
        });
    }).catch();
    }
    
    
}

  return (
    <>
    <h4>Categories</h4><hr></hr>
    <button class="btn1" onClick={handleCatFormShowHide} type="submit">Add New Category</button><br /><br />
    <div class="table_page table-responsive">
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Cat. Name</th>
                    <th>Cat. Slug</th>
                    <th>Actions</th>
                </tr>
            </thead>
                <tbody>
                {
                        catShow.map((data,index)=>
                            <tr>
                                <td>{index+1}</td>
                                <td>{data.name}</td>
                                <td>{data.slug}</td>
                                <td>
                                    <Button style={{float:'left'}} className="btnlol">Edit</Button>
                                    <Button className="btnlol"> Delete</Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        {
            catFormShowHide && 
            <>
                 <br></br>
                <div class="account_login_form">
                    <form onSubmit={handleCatAdd}>
                        <p>Add New Category</p>
                        {
                            alert.status && <p className={`d-flex justify-content-between alert alert-${alert.type}`}>{alert.msg}<button onClick={handleCloseButton} className='btn-close'></button></p>
                        }
                        <div class="default-form-box mb-20">
                            <label>First Name</label>
                            <input type="text" value={cat.name} onChange={e=>setCat({...cat,name:e.target.value})} placeholder='Enter Category Name?' />
                        </div>
                        <button class="btn1" type="submit">Add New Category</button>
                    </form>
                </div>  
            </>
        }
                   
    </>
  )
}

export default Category