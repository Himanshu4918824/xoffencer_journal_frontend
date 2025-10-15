import { Button, Grid, TextField, Avatar } from "@mui/material";
import logo from "../../../assets/logo.png"
import cart from "../../../assets/cart.png"
import { useState } from "react";
import { postData, currentDate } from "../../../services/FetchNodeAdminServices";
import { LoadingButton } from "@mui/lab";
import SaveIcon from '@mui/icons-material/Save';
import Swal from "sweetalert2";
import { userStyle } from "./CategoryCss";

export default function Category(props) {
    const [categoryName, SetCategoryName] = useState('');
    const [categoryIcon, SetCategoryIcon] = useState({ bytes: " ", fileName: cart })
    const [loadingButton, setLoadingButton] = useState(false)
    const [errorMessage, setErrorMessage] = useState({})

    const handleErrorMessage = (label, message) => {
        var msg = errorMessage;
        msg[label] = message;
        setErrorMessage((prev) => ({ ...prev, ...msg }))
    }


    function handleIcon(e) {
        handleErrorMessage('categoryIcon', null)
        SetCategoryIcon({ bytes: e.target.files[0], fileName: URL.createObjectURL(e.target.files[0]) })

    }

    function resetData() {
        SetCategoryName('');
        SetCategoryIcon({ bytes: '', fileName: cart });
    }

    const handleResetData = () => {
        resetData();
    }

    const validData = () => {
        var err = false
        if (categoryName.length === 0) {
            handleErrorMessage('categoryName', 'Pls insert categoryname...');
            err = true;
        }

        if (categoryIcon.bytes === 0) {
            handleErrorMessage('categoryIcon', 'Pls select category icon...');
            err = true;

        }
        return err;
    }

    const handleSubmitData = async () => {
        var err = validData();
        if (err === false) {
            setLoadingButton(true)
            var formData = new FormData()
            formData.append('categoryname', categoryName);
            formData.append('categoryicon', categoryIcon.bytes);
            formData.append('created_at', currentDate());
            formData.append('updated_at', currentDate());
            formData.append('user_admin', 'farzii');

            console.log("xxxxxx:",formData)

            var result = await postData('category/category_submit', formData)

            if (result.status) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Category Submit Successfully",
                    showConfirmButton: false,
                    timer: 2000
                });
            }
            else {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Your work has been not saved",
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        }

        setLoadingButton(false)
        // resetData();
    }

    var classes = userStyle();
    return (
        <div className={classes.root}>
            <div className={classes.box}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div className={classes.mainHeadingStyle}>

                            <img alt="logo" src={logo} className={classes.imageStyle} />
                            <div className={classes.headingStyle}>Category Register</div>

                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField onFocus={() => handleErrorMessage('categoryName', null)} error={errorMessage?.categoryName} helperText={errorMessage?.categoryName} onChange={(event) => SetCategoryName(event.target.value)} label="Category Name" fullWidth value={categoryName} />
                    </Grid>

                    <Grid item xs={6} className={classes.centerStyle}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Button variant="contained" component="label">Upload
                                <input onChange={handleIcon} type="file" accept="images/*" multiple hidden />
                            </Button>
                            <div>{errorMessage?.categoryIcon != null ? errorMessage?.categoryIcon : <></>}</div>
                        </div>
                    </Grid>

                    <Grid item xs={6} className={classes.centerStyle}>
                        <Avatar src={categoryIcon.fileName} variant="rounded"></Avatar>
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