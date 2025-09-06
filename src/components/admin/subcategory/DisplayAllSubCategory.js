import { useEffect, useState } from "react"
import { createdDate, currentDate, getData, serverURL,postData } from "../../../services/FetchNodeAdminServices"
import MaterialTable from "@material-table/core"
import { MenuItem, FormControl, InputLabel,FormHelperText, Select, IconButton,Dialog, DialogContent, DialogActions, Button, Avatar, Grid, TextField } from "@mui/material"
import logo from '../../../assets//logo.png'
import cart from '../../../assets/cart.png'
import { LoadingButton } from "@mui/lab";
import SaveIcon from '@mui/icons-material/Save';
import Swal from "sweetalert2"
import CloseIcon from '@mui/icons-material/Close';
import { userStyle } from "./SubCategoryCss"
import { useNavigate } from "react-router-dom"

export default function DisplayAllSubCategory()
{
  var navigate=useNavigate();
    var classes=userStyle();
    const [subCategoryList,setSubCategoryList]=useState([])
    const [open,setOpen]=useState(false)

/************************************ SubCategory Action********************************/

    const [subCategoryId,setSubCategoryId]=useState('')
    const [categoryId,setCategoryId]=useState('')
    const [subCategoryName,setSubCategoryName]=useState('')
    const [subCategoryIcon,setSubCategoryIcon]=useState({bytes:'',fileName:cart})
    const [loadingButton,setLoadingButton]=useState(false)
    const [errorMessage,setErrorMessage]=useState({});
    const [hideUploadButton,setHideUploadButton]=useState(false)
    const [oldImage,setOldImage]=useState('')
    const [categoryList,setCategoryList]=useState([])



    const fetchAllCategory=async()=>{
        var result= await getData('category/display_all_category')
        setCategoryList(result.data)
    }

    useEffect(function () {

        fetchAllCategory()
    
      }, [])


      const fillCategory=()=>{
        return categoryList.map((item,i)=>{
            return <MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>
        })
      }

    const showSaveCancelButton=()=>{
      return(<div>
        <Button variant="contained" onClick={handleEditIcon}>Save</Button>
        <Button variant="contained" onClick={handleCancelIcon}>Cancel</Button>
      </div>)
    }
    
    const handleErrorMessage=(label,message)=>{
      var msg=errorMessage;
      msg[label]=message;
      setErrorMessage((prev) => ({ ...prev, ...msg }))

  }

  const validData=()=>{
      var err=false;
      if(subCategoryName.length===0)
      {
          handleErrorMessage('subCategoryName','plz insert SubCategoryName...')
           err = true;

      }
/*
      if(subCategoryIcon.bytes==0)
          {
              handleErrorMessage('subCategoryIcon','plz upload picture...')
               err = true;
  
          }
*/
          if(categoryId.length===0)
              {
                  handleErrorMessage('categoryId','plz insert category Id...')
                   err = true;
      
              }


      return err;
  }

  const handleIcon=(e)=>{
      handleErrorMessage('subCategoryIcon',null)
      setSubCategoryIcon({bytes:e.target.files[0],fileName:URL.createObjectURL(e.target.files[0])})
      setHideUploadButton(true);
  
  }

  const subcategoryForm=()=>{
    return(
      
              <Grid container spacing={2}>
                  <Grid item xs={12}>
                      <div className={classes.mainHeadingStyle}>
                      <img src={logo} alt="." className={classes.imageStyle}/>
                      <div className={classes.headingStyle}>SubCategory Register</div>
                      </div>
                  </Grid>

                  <Grid item xs={12}>
                  <FormControl fullWidth>
                        <InputLabel>category Id</InputLabel>
                        <Select value={categoryId}
                                label='categoryid' 
                                onFocus={()=>handleErrorMessage('categoryId',null)} 
                                error={errorMessage?.categoryId}                               
                                onChange={(event)=>setCategoryId(event.target.value)}>
                           
                           {fillCategory()}

                        </Select>
                        <FormHelperText>{errorMessage?.categoryId}</FormHelperText>
                       </FormControl>
                      </Grid>

                  <Grid item xs={12}>
                      <TextField onFocus={()=>handleErrorMessage('subCategoryName',null)} error={errorMessage?.subCategoryName} helperText={errorMessage?.subCategoryName} onChange={(event)=>setSubCategoryName(event.target.value)} label='SubCategory Name' variant="outlined" fullWidth value={subCategoryName}/>
                  </Grid>

                  <Grid item xs={6} className={classes.centerStyle}>
                     <div style={{display:'flex',flexDirection:'column'}}>

                     {hideUploadButton?<div>{showSaveCancelButton()}</div>:
                      <Button variant="contained" component='label'>upload
                          <input onChange={handleIcon} type="file" accept="images/*"  hidden multiple />
                      </Button>}
                      <div>{errorMessage?.subCategoryIcon?errorMessage?.subCategoryIcon:<></>}</div>
                      </div>
                  </Grid>

                  <Grid item xs={6} className={classes.centerStyle}>
                      <Avatar src={subCategoryIcon.fileName} variant="rounded"></Avatar>
                  </Grid>

                  

              </Grid>
  )
  }


 
  const handleEditData=async()=>{
    var error=validData();
    if(error===false){
    setLoadingButton(true)
   var body={'categoryid':categoryId,
             'subcategoryname':subCategoryName,
             'updated_at':currentDate(),
             'user_admin':'Farzi',
             'subcategoryid':subCategoryId
            }

    var result=await postData('subCategory/edit_subCategory_data',body);
    if(result.status)
    {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "SubCategory Update Successfully",
          showConfirmButton: false,
          timer: 2000
        });

    }
    else
    {
       
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been not saved",
         showConfirmButton: false,
         timer: 2000
});
    }

    setLoadingButton(false)
}

fecthAllSubCategory()
}


const handleEditIcon=async()=>{

  setLoadingButton(true)
  var formData=new FormData()
  formData.append('categoryid',categoryId);
  formData.append('subcategoryicon',subCategoryIcon.bytes)
  formData.append('updated_at',currentDate())
  formData.append('user_admin','farzi');
  formData.append('subcategoryid',subCategoryId)

  var result=await postData('subCategory/edit_subCategory_icon',formData);
  if(result.status)
  {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "SubCategory update Successfully",
        showConfirmButton: false,
        timer: 2000
      });

  }
  else
  {
     
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been not saved",
       showConfirmButton: false,
       timer: 2000
});

  }

  setLoadingButton(false)
  fecthAllSubCategory()
  setHideUploadButton(false)
}


const handleCancelIcon=()=>{
  setSubCategoryIcon({bytes:'',fileName:oldImage})
  setHideUploadButton(false);
}


const subCategoryDelete = async () => {

  setLoadingButton(true)
  var body = {
    subcategoryid: subCategoryId
  }

  var result = await postData('subCategory/delete_subCategory', body)

  if (result.status) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "subCategory Delete Successfully",
      showConfirmButton: false,
      timer: 2000
    });
  }
  else {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 2000
    });
  }

  setLoadingButton(false)
  setHideUploadButton(false)

  fecthAllSubCategory()

}



const handleDeleteCategory = async () => {

  Swal.fire({
    title: "Do you want to Delete the subCategory?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "delete",
    denyButtonText: `Don't delete`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {

      subCategoryDelete()

    } else if (result.isDenied) {
      Swal.fire("subCategory  not change", "", "info");
    }
  });
}






/***************************************************************************************/
    const fecthAllSubCategory=async()=>{
        var result = await getData('subCategory/display_all_subCategory')
        if(result.status)
        {
            setSubCategoryList(result.data)
        }
        else
        {
            alert(result.message);
        }
    }

    useEffect(function() {

        fecthAllSubCategory()
    },[])

    const handleOpenDialog=(rowData)=>{
      setSubCategoryId(rowData.subcategoryid);
      setCategoryId(rowData.categoryid);
      setSubCategoryName(rowData.subcategoryname);
      setSubCategoryIcon({bytes:'',fileName:`${serverURL}/images/${rowData.subcategoryicon}`})

      setOpen(true);
      setOldImage(`${serverURL}/images/${rowData.subcategoryicon}`)
    }

    const handleCloseDialog=()=>{
      setOpen(false);
    }

    const showSubCategoryDialog=()=>{
      return(<div>

      <Dialog open={open}>
        <DialogContent>
          {subcategoryForm()}
        </DialogContent>
        <DialogActions>
              <LoadingButton
                   loading={loadingButton}
                   loadingPosition="edit"
                   startIcon={<SaveIcon />}
                   variant="contained"
                    onClick={handleEditData}
                   >
                   Edit Data
                  </LoadingButton>

                  <Button onClick={handleDeleteCategory} variant="contained">Delete</Button>

                  <IconButton
                    aria-label="close"
                    onClick={handleCloseDialog}
                    sx={{
                          position: 'absolute',
                          right: 8,
                          top: 8,
                          color: (theme) => theme.palette.grey[500],
                         }}
                  >
          <CloseIcon />
        </IconButton>

          
        </DialogActions>
      </Dialog>

      </div>)
    }


    /***********Create Table**************/

    function subCategoryTable(){
            return (
                <div className={classes.root}>
                    <div className={classes.displayBox}>
              <MaterialTable
                title="SubCategory List"
                columns={[
                  { title: 'Category Name', field: 'categoryname' },
                  { title: 'SubCategory Id', field: 'subcategoryid' },
                  { title: 'SubCategory Name', field: 'subcategoryname'},
                  { title: 'Created_At',render:(rowData)=><div style={{display:'flex',flexDirection:'column'}}><div>{createdDate(rowData.created_at)}</div><div>{createdDate(rowData.updated_at)}</div></div>},
        
                  { title: 'User_Admin', field: 'user_admin'},
                  { title: 'Icon', render:(rowData)=><div><img src={`${serverURL}/images/${rowData.subcategoryicon}`} alt="." style={{width:60,height:60,borderRadius:6}} /></div>},
                  
                ]}
                data={subCategoryList}   

                actions={[
                  {
                    icon: 'edit',
                    tooltip: 'Edit SubCategory',
                    onClick: (event, rowData) => handleOpenDialog(rowData)
                  },

                  {
                    icon: 'add',
                    tooltip: 'Add User',
                    isFreeAction: true,
                    onClick: (event) => navigate('/dashboard/subcategory')
                  }
                ]}
              />
              </div>
              </div>
            )
          }
/************************************************************************************/

          return(<div>
            {subCategoryTable()}
            {showSubCategoryDialog()}

          </div>)
    }

