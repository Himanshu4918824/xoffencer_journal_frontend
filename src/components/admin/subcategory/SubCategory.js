import { Avatar, Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import logo from '../../../assets//logo.png'
import cart from '../../../assets/cart.png'
import { useEffect, useState } from "react"
import { LoadingButton } from "@mui/lab";
import SaveIcon from '@mui/icons-material/Save';
import { currentDate, postData, getData } from "../../../services/FetchNodeAdminServices"
import Swal from "sweetalert2"
import { userStyle } from "./SubCategoryCss";

export default function SubCategory(props)
{
    const [categoryId,setCategoryId]=useState('')
    const [subCategoryName,setSubCategoryName]=useState('')
    const [subCategoryIcon,setSubCategoryIcon]=useState({bytes:'',fileName:cart})
    const [loadingButton,setLoadingButton]=useState(false)
    const [errorMessage,setErrorMessage]=useState({});
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



    function resetData()
    {
        setCategoryId('')
        setSubCategoryName('')
        setSubCategoryIcon({bytes:'',fileName:cart})
    }

    const handleResetData=()=>
    {
        resetData()
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

        if(subCategoryIcon.bytes===0)
            {
                handleErrorMessage('subCategoryIcon','plz upload picture...')
                 err = true;
    
            }

            if(categoryId.length===0)
                {
                    handleErrorMessage('categoryId','plz insert categoryId...')
                     err = true;
        
                }


        return err;
    }

    const handleIcon=(e)=>{
        handleErrorMessage('subCategoryIcon',null)
        setSubCategoryIcon({bytes:e.target.files[0],fileName:URL.createObjectURL(e.target.files[0])})
    
    }

    const handleSubmitData=async()=>{
        var error=validData();
        if(error==false){
        setLoadingButton(true)
        var formData=new FormData()
        formData.append('categoryid',categoryId);
        formData.append('subcategoryname',subCategoryName)
        formData.append('subcategoryicon',subCategoryIcon.bytes)
        formData.append('created_at',currentDate())
        formData.append('updated_at',currentDate())
        formData.append('user_admin','farzi');

        var result=await postData('subCategory/subcategory_submit',formData);
        if(result.status)
        {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "SubCategory Submitt Successfully",
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
    }

setLoadingButton(false)
       resetData()
    }

    
    var classes=userStyle()
    return(
        <div className={classes.root}>
            <div className={classes.box}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div className={classes.mainHeadingStyle}>
                        <img src={logo} className={classes.imageStyle}/>
                        <div className={classes.headingStyle}>SubCategory Register</div>
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                       {/* <TextField onFocus={()=>handleErrorMessage('categoryId',null)} error={errorMessage?.categoryId} helperText={errorMessage?.categoryId} onChange={(event)=>setCategoryId(event.target.value)} label='Category Id' variant="outlined" fullWidth value={categoryId}/> */}

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
                        <Button variant="contained" component='label'>Upload
                            <input onChange={handleIcon} type="file" accept="images/*"  hidden multiple />
                        </Button>
                        <div>{errorMessage?.subCategoryIcon?errorMessage?.subCategoryIcon:<></>}</div>
                        </div>
                    </Grid>

                    <Grid item xs={6} className={classes.centerStyle}>
                        <Avatar src={subCategoryIcon.fileName} variant="rounded"></Avatar>
                    </Grid>

                    <Grid item xs={6} className={classes.centerStyle}>
                    <LoadingButton
                            loading={loadingButton}
                            loadingPosition="start"
                            startIcon={<SaveIcon />}
                            variant="contained"
                            onClick={handleSubmitData}
                        >
                            Save
                        </LoadingButton>
                    </Grid>

                    <Grid item xs={6} className={classes.centerStyle}>
                        <Button onClick={handleResetData} variant="contained">Reset</Button>
                    </Grid>
                    

                </Grid>

            </div>
        </div>
    )
}