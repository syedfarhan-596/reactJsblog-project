import react from 'react';
import classes from './header.module.css';
import myLogo from './myLogo.png';
const HeaderSection = () => {
    return(
        <div className={classes.topBar}>
            <div className={classes.wrapImgBtn}>
                <div>
                    <img className={classes.myLogo} src={myLogo} alt="logo" />
                </div>
                <div className={classes.dropDownBtn}>
                    <div className={classes.dropDown}>
                        <button className={classes.headerBtn}>BLOGS</button>
                        <div className={classes.dropDownItems}>
                            <h3 className={classes.a} href='#'>Technology</h3>
                            <h3 className={classes.a}>Lifestyle</h3>
                            <h3 className={classes.a}>Entertainment</h3>
                            <h3 className={classes.a}>Health and Wellness</h3>
                            <h3 className={classes.a}>Travel and Adventure</h3>
                            <h3 className={classes.a}>Food and Cooking</h3>
                            <h3 className={classes.a}>Fashion and Beauty</h3>
                        </div>
                    </div>
                        <div className={classes.dropDown}>
                        <button className={classes.headerBtn}>NEWS</button>
                        <div className={classes.dropDownItems}>
                            <h3 className={classes.a}>Technology News</h3>
                            <h3 className={classes.a}>World News</h3>
                            <h3 className={classes.a}>Entertainment News</h3>
                            <h3 className={classes.a}>Health News</h3>
                            <h3 className={classes.a}>Travel News</h3>
                            <h3 className={classes.a}>Sports News</h3>
                            <h3 className={classes.a}>Business News</h3>
                        </div>
                    </div>
                        <div className={classes.dropDown}>
                        <button className={classes.headerBtn}>JOBS</button>
                        <div className={classes.dropDownItems}>
                            <h3 className={classes.a}>Technology Jobs</h3>
                            <h3 className={classes.a}>Marketing</h3>
                            <h3 className={classes.a}>Accounting Jobs</h3>
                            <h3 className={classes.a}>Service Jobs</h3>
                            <h3 className={classes.a}>Healthcare Jobs</h3>
                            <h3 className={classes.a}>Education Jobs</h3>
                            <h3 className={classes.a}>Engineering Jobs</h3>
                        </div>
                    </div>
                </div>
            </div>
                <div>
                    <h3 className={classes.a}><button className={classes.signIn}>Sign In</button></h3>
                </div>
        </div>
    )
}
export default HeaderSection;