import react from 'react';
import classes from './footer.module.css';

const footer = () =>{
    return(
        <div className={classes.footerWrapper}>
            <div className={classes.usefulLinks}>
                <dl>
                <dt><h2>Useful Links</h2></dt>
                <dd><a>contact Us</a></dd>
                <dd><a>About Us</a></dd>
                <dd><a>Jobs</a></dd>
                <dd><a>Help Us</a></dd>
                <dd><a>Services</a></dd>
                <dd><a>Blogs</a></dd>
                </dl>
            </div>
            <div className={classes.subscribeArea}>
                <h2>Subscribe To Our News</h2>
                <input placeholder='Enter Your Email' type="text" ></input><br />
                <button>Subscribe</button>
            </div>
            <div>
                <h2>&copy;Copy Right 2021 </h2>
                <p>All rights recived <br></br>(2023-2050)</p>
            </div>
        </div>
    )
}
export default footer;