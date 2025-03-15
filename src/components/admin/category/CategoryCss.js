import { makeStyles } from "@mui/styles"
var userStyle = makeStyles({
    root:{
        width:"100%",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },

    box:{
        width:500,
        height:"auto",
        padding:10,
        margin:10,
        background:"#f7f1e3",
    },

    headingStyle:{
        fontSize:18,
        letterSpacing:0.5,
        fontWeight:"bold",
        marginLeft:10,
    },

    imageStyle:{
        width:45,
        height:45,
    
    },

    mainHeadingStyle:{
        display:"flex",
        alignItems:"center",

    },

    centerStyle:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center"

    },
    
    displayBox:{
        width:800,
        height:"auto",
        padding:10,
        margin:10,
        background:"#f7f1e3",
    }
})

export {userStyle}