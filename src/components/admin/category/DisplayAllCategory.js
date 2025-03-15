import { useState, useEffect } from "react"
import { createdDate, getData, serverURL } from "../../../services/FetchNodeAdminServices"
import MaterialTable from "@material-table/core"
import { userStyle } from "./CategoryCss"
import { IconButton, Button, Dialog, DialogActions, DialogContent, Grid, TextField, Avatar } from "@mui/material";
import logo from "../../../assets/logo.png"
import cart from "../../../assets/cart.png"
import { postData, currentDate } from "../../../services/FetchNodeAdminServices";
import { LoadingButton } from "@mui/lab";
import SaveIcon from '@mui/icons-material/Save';
import Swal from "sweetalert2";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";


export default function DisplayAllCategory() {
  var navigate=useNavigate()
  var classes = userStyle();
  const [categoryList, setCategoryList] = useState([])
  const [open, setOpen] = useState(false)

  /**********************Category Actions*********************/

  const [categoryId, SetCategoryId] = useState('');
  const [categoryName, SetCategoryName] = useState('');
  const [categoryIcon, setCategoryIcon] = useState({ bytes: " ", fileName: cart })
  const [loagingButton, setLoadingButton] = useState(false)
  const [errorMessage, setErrorMessage] = useState({})
  const [hideUploadButton, setHideUploadButton] = useState(false)
  const [oldImage,setOldImage]=useState();


  const showSaveCancelButton = () => {
    return (<div>
      <Button variant="contained" onClick={handleEditIcon}>Save</Button>
      <Button variant="contained" onClick={handleCancelIcon}>Cancel</Button>
    </div>)
  }

  const handleErrorMessage = (label, message) => {
    var msg = errorMessage;
    msg[label] = message;
    setErrorMessage((prev) => ({ ...prev, ...msg }))
  }

  function handleIcon(e) {

    handleErrorMessage('categoryIcon', null)
    setCategoryIcon({ bytes: e.target.files[0], fileName: URL.createObjectURL(e.target.files[0]) })
    setHideUploadButton(true)
  }
  const validData = () => {
    var err = false
    if (categoryName.length == 0) {
      handleErrorMessage('categoryName', 'Pls insert categoryname...');
      err = true;
    }

    if (categoryIcon.bytes == 0) {
      handleErrorMessage('categoryIcon', 'Pls select category icon...');
      err = true;
    }
    return err;
  }

  const categoryForm = () => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.mainHeadingStyle}>
            <img src={logo} className={classes.imageStyle} />
            <div className={classes.headingStyle}>Category Register</div>
          </div>
        </Grid>

        <Grid item xs={12}>
          <TextField value={categoryName} onFocus={() => handleErrorMessage('categoryName', null)} error={errorMessage?.categoryName} helperText={errorMessage?.categoryName} onChange={(event) => SetCategoryName(event.target.value)} label="Category Name" fullWidth />
        </Grid>

        <Grid item xs={6} className={classes.centerStyle}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>

            {hideUploadButton ? <div>{showSaveCancelButton()}</div> :
              <Button variant="contained" component="label">Upload
                <input onChange={handleIcon} type="file" accept="images/*" multiple hidden />
              </Button>}

            <div>{errorMessage?.categoryIcon != null ? errorMessage?.categoryIcon : <></>}</div>
          </div>
        </Grid>

        <Grid item xs={6} className={classes.centerStyle}>
          <Avatar src={categoryIcon.fileName} variant="rounded"></Avatar>
        </Grid>

      </Grid>

    )
  }

  /************************************************************/

  const fecthAllCategory = async () => {
    var result = await getData('category/display_all_category')
    if (result.status) {
      setCategoryList(result.data);
    }
    else {
      alert(result.message)
    }
  }

  useEffect(function () {

    fecthAllCategory()

  }, [])

  const handleOpenDialog = (rowData) => {
    setCategoryIcon({ bytes: '', fileName: `${serverURL}/images/${rowData.categoryicon}` })
    SetCategoryId(rowData.categoryid)
    SetCategoryName(rowData.categoryname)
    setOpen(true)
    setOldImage(`${serverURL}/images/${rowData.categoryicon}`);
  }

  const handleCloseDialog = () => {
    setOpen(false)
  }


  const showCategoryDialog = () => {
    return (<div>
      <Dialog open={open}>
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
        <DialogContent>
          {categoryForm()}
        </DialogContent>

        <DialogActions>
          <LoadingButton
            loading={loagingButton}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
            onClick={handleEditData}
          >
            Edit Data
          </LoadingButton>

          <Button onClick={handleDeleteCategory} variant="contained">Delete</Button>

        </DialogActions>
      </Dialog>
    </div>)
  }


  const handleEditData = async () => {
    var err = validData();
    if (err == false) {
      setLoadingButton(true)
      var body = {
        'categoryname': categoryName,
        'categoryid': categoryId,
        'categoryicon': categoryIcon.bytes,
        'updated_at': currentDate(),
        'user_admin': 'farzii',
      }

      var result = await postData('category/edit_category_data', body)

      if (result.status) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Category update Successfully",
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

    }

    fecthAllCategory()

  }


  const handleEditIcon = async () => {

    setLoadingButton(true)
    var formData = new FormData()
    formData.append('categoryid', categoryId)
    formData.append('categoryicon', categoryIcon.bytes);
    formData.append('updated_at', currentDate());
    formData.append('user_admin', 'farzii');

    var result = await postData('category/edit_category_icon', formData)

    if (result.status) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Category update Successfully",
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

    fecthAllCategory()

  }

  const categoryDelete = async () => {

    setLoadingButton(true)
    var body = {
      categoryid: categoryId,
    }

    var result = await postData('category/delete_category', body)

    if (result.status) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Category Delete Successfully",
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

    fecthAllCategory()

  }


  const handleDeleteCategory = async () => {

    Swal.fire({
      title: "Do you want to Delete the category?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "delete",
      denyButtonText: `Don't delete`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        categoryDelete()

      } else if (result.isDenied) {
        Swal.fire("Category  not change", "", "info");
      }
    });
  }



  const handleCancelIcon=()=>{
    setCategoryIcon({bytes:'',fileName:oldImage})
    setHideUploadButton(false);
  }


  /********************TABLE************/

  function categoryTable() {
    return (
      <div className={classes.root}>
        <div className={classes.displayBox}>
          <MaterialTable
            title="Category List"
            columns={[
              { title: 'Category Id', field: 'categoryid' },
              { title: 'Category Name', field: 'categoryname' },
              { title: 'Created At', render: (rowData) => <div style={{ display: 'flex', flexDirection: 'column' }}><div>{createdDate(rowData.created_at)}</div><div>{createdDate(rowData.updated_at)}</div></div> },

              { title: 'Admin', field: 'user_admin' },
              { title: 'Icon', render: (rowData) => <div><img src={`${serverURL}/images/${rowData.categoryicon}`} style={{ width: 60, height: 60, borderRadius: 6 }} /></div> }


            ]}
            data={categoryList}
            options={{
              pageSize: 3,
              pageSizeOptions: [3, 5, 10],
            }}

            actions={[
              {
                icon: 'edit',
                tooltip: 'Edit Category',
                onClick: (event, rowData) => handleOpenDialog(rowData)
              },

              {
                icon: 'add',
                tooltip: 'Add User',
                isFreeAction: true,
                onClick: (event) => navigate('/dashboard/category')
              }
            ]}
          />
        </div>
      </div>
    )
  }



  /******************************* */

  return (
    <div>
      {categoryTable()}
      {showCategoryDialog()}

    </div>
  )

}

