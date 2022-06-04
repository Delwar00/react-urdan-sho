import axios from 'axios';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react'
//tag value set
const Tag = ({makeSlug,tagShow,handleCloseButton,alert,setAlert}) => {
 //value set tag
  const [tag, setTag] = useState({
      'id':'',
      'name':''
  });
//tag add form show hide
const [tagFormShow,setTagFormShow]=useState(false);
const handleTagShowHide=()=>{
    setTagFormShow(true);
}

//Tag add that means data add
const handleAddTag=(e)=>{
    e.preventDefault();
    setTagFormShow(false);
    let pattern=/^[a-zA-Z]/;
    if(tag.name===''){
        setAlert({
            msg:'All fields are Required!',
            type:'danger',
            status:true
        });
    }
    else if(pattern.test(tag.name)===false){
        setAlert({
          'msg':'Letter must be a-z A-Z 0-9 character only!',
          'type':'danger',
          'status':true
        });
      }
    else{
        axios.post('http://localhost:5050/tags',{
            'id':tag.id,
           'name':tag.name,
            'slug':makeSlug(tag.name)
        }).then(res=>{
            setTag({
                'name':''
            });
        }).catch();
    }
    
}
//Delete tag
const handleTagDelete=(id)=>{
    axios.delete('http://localhost:5050/tags/'+id);
}
//edit tag
const [editTagFormShow,setEditTagFormShow]=useState(false);
const handleTagEdit=(id)=>{
    setEditTagFormShow(true);
    axios.get('http://localhost:5050/tags/'+id).then(res=>{
        setTag(res.data);
    }).catch();
}
const handleTagUpdateSubmit=(e)=>{
    e.preventDefault();
    setEditTagFormShow(false);
    if(tag.name===''){
        setAlert({
            'msg':'All Fields are Required!',
            'type':'danger',
            'status':true
          });
    }
    else{
        axios.patch('http://localhost:5050/tags/'+tag.id,{
        id:tag.id,
        name:tag.name,
        slug:makeSlug(tag.name)
    }).then(res=>{
        setTag({
            name:''
        });
        setAlert({
            msg:'Data updated Successfully',
            type:'info',
            status:true
        });
    }).catch();
    }
}
  return (
    <>
    <h4>Tags</h4><hr></hr>
    <button class="btn1" onClick={handleTagShowHide} type="submit">Add New Tags</button><br /><br />
    <div class="table_page table-responsive">
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Tag Name</th>
                    <th>Tag Slug</th>
                    <th>Actions</th>
                </tr>
            </thead>
                <tbody>
                    {
                        tagShow.map((data,index)=>
                            <tr>
                                <td>{index+1}</td>
                                <td>{data.name}</td>
                                <td>{data.slug}</td>
                                <td>
                                    <Button style={{float:'left'}} className="btnlol"  onClick={()=>handleTagEdit(data.id)}>Edit</Button>
                                    <Button className="btnlol" onClick={()=>handleTagDelete(data.id)}> Delete</Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        {
            tagFormShow &&
           <>
                 <br></br>
                <div class="account_login_form">
                    <form onSubmit={handleAddTag}>
                        <p>Add New Tag</p>
                        {
                            alert.status && <p className={`d-flex justify-content-between alert alert-${alert.type}`}>{alert.msg}<button onClick={handleCloseButton} className='btn-close'></button></p>
                        }
                        <div class="default-form-box mb-20">
                            <label>Tag Name</label>
                            <input type="text" value={tag.name} onChange={e=>{setTag({...tag,name:e.target.value})}} placeholder="Enter Tag Name?" />
                        </div>
                        <button class="btn1" type="submit">Add Tag</button>
                    </form>
                </div> 
           </>   
        }  
        {
        editTagFormShow && 
        <>
            <br></br>
            <div class="account_login_form">
                <form onSubmit={handleTagUpdateSubmit}>
                    <p>Update Tag</p>
                    {
                        alert.status && <p className={`alet alert-${alert.type}`}>{alert.msg}</p>
                    }
                    <div class="default-form-box mb-20">
                        <label>Tag Name</label>
                        <input type="text"  value={tag.name} onChange={e=>{setTag({...tag,name:e.target.value})}} placeholder="Update Tag Name?" />
                    </div>
                    <button class="btn1" type="submit">Update Tag</button>
                </form>
            </div>   
        </> 
        }     
    </>
  )
}

export default Tag