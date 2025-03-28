// import { Grid } from "@mui/material";

import { Divider, Grid } from "@mui/material";

// export default function Footer() {
//     var data = [{ category: 'Grocery', PopularCategories: 'Biscuits, Drinks & Packaged Foods' },
//     { category: 'Electronics', PopularCategories: 'Fruits & Vegetables' },
//     { category: 'Fashion', PopularCategories: 'Cooking Essentials' },
//     { category: 'Home & Lifestyle', PopularCategories: 'Dairy & Bakery' },
//     { category: 'Premium Fruits', PopularCategories: 'Personal Care' },
//     { category: 'Books', PopularCategories: 'Beauty' },
//     { category: 'Furniture', PopularCategories: 'Home Care' },
//     { category: '', PopularCategories: 'Mom & Baby Care' },
//     { category: '', PopularCategories: 'School, Office & Stationery' },


//     ]

//     const showCategory = () => {
//         return data.map((item, i) => {
//             return (<div>
//                 {item.category}
//             </div>)
//         })
//     }

//     const showPopular = () => {
//         return data.map((item, i) => {
//             return (<div style={{}}>
//                 {item.PopularCategories}
//             </div>)
//         })
//     }


//     return (

//         <Grid container style={{ background: 'lightgrey', display: 'flex', justifyContent: 'center' }}>
//             <Grid item xs={2}>
//                 <div style={{ fontSize: 16, fontWeight: 'bold', margin: 10 }}>All Category</div>
//                 <div style={{ lineHeight: 2, margin: 10 }}>

//                     {showCategory()}
//                 </div>

//             </Grid>

//             <Grid item xs={2.5}>
//                 <div style={{ fontSize: 16, fontWeight: 'bold', margin: 10 }}>Popular Categories</div>
//                 <div style={{ lineHeight: 2.4285714286, margin: 10 }}>

//                     {showPopular()}

//                 </div>

//             </Grid>

//             <Grid item xs={2}>
//                 <div style={{ fontSize: 16, fontWeight: 'bold', margin: 10 }}>Customer Account</div>
//                 <div style={{ lineHeight: 2.4285714286 }}>
//                     <ul type=''>
//                         <li>My Account</li>
//                         <li> My Orders</li>
//                         <li>  Wishlist</li>
//                         <li>Delivery Addresses</li>
//                         <li>  JioMart Wallet</li>
//                     </ul>


//                 </div>

//             </Grid>

//             <Grid item xs={2}>
//                 <div style={{ fontSize: 16, fontWeight: 'bold', margin: 10 }}>Help & Support</div>
//                 <div style={{ lineHeight: 2.4285714286 }}>
//                     <ul type=''>
//                         <li>About Us</li>
//                         <li>FAQ</li>
//                         <li>Terms & Conditions</li>
//                         <li>Privacy Policy</li>
//                         <li>E-waste Policy</li>
//                         <li>Cancellation & Return Policy</li>
//                         <li>Shipping & Delivery Policy</li>
//                         <li>AC Installation by resQ</li>
//                     </ul>

//                 </div>

//             </Grid>

//             <Grid item xs={2}>
//                 <div style={{ fontSize: 24, fontWeight: 'bold', margin: 10 }}>Contact Us</div>
//                 <div style={{ fontSize: 14 }}>
//                    <div> WhatsApp us: 70003 70003
//                     Call us: 1800 890 1222
//                     8:00 AM to 8:00 PM, 365 days
//                     </div>
//                     <div style={{ marginTop: 30 }}>
//                         Should you encounter any bugs,
//                         glitches, lack of functionality, delayed
//                         deliveries, billing errors or other
//                         problems on the website, please email
//                         us on cs@jiomart.com

//                     </div>

//                 </div>

//             </Grid>

//         </Grid>
//     )
// }

export default function Footer() {

    return(
        <Grid container style={{background:'lightgrey',display:'flex',justifyContent:'center'}}>
            <Grid item xs={3}>
                <div style={{fontSize:20,fontWeight:'bold',margin:10,marginTop:60}}>Ouick</div>
                <Divider style={{width:100}}/>
                <div style={{lineHeight:2,margin:10,marginTop:40}}>
                    <div>Current issue</div>
                    <div>Past Issue</div>
                    <div>Blog</div>
                    <div>Editorial Board</div>
                    <div>Join US Reviewer</div>
                    <div>Refund Policy</div>
                    <div>Shipping and Delivery Policy</div>
                    <div>Privacy Policy</div>
                    <div>Terms And Conditions</div>
                </div>
            </Grid>
            
            <Grid item xs={2}>
            <div style={{lineHeight:2,margin:10,marginTop:147}}>
                    <div>Reviews</div>
                    <div>Book Publication</div>
                    <div>Conference Seminar</div>
                    <div>About Us</div>
                    <div>National Publications</div>
                    <div>International Publications</div>
            </div>

            </Grid>
            
            <Grid item xs={6}>



            </Grid>
        </Grid>
    )
}