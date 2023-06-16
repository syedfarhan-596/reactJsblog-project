import react from 'react';
import classes from './header.module.css';
import myLogo from './myLogo.png';
const HeaderSection = () => {
    return(
        <div className={classes.topBar}>
            <div className={classes.wrapImgBtn}>
                <div>
                    <a>
                    <img className={classes.myLogo} src={myLogo} alt="logo" />
                    </a>
                </div>
                <div className={classes.dropDownBtn}>
                    <div className={classes.dropDown}>
                        <button className={classes.headerBtn}>BLOGS</button>
                        <div className={classes.dropDownItems}>
                            <a href='#'>Technology</a>
                            <a href='#'>Lifestyle</a>
                            <a href="#">Entertainment</a>
                            <a href="#">Health and Wellness</a>
                            <a href='#'>Travel and Adventure</a>
                            <a href='#'>Food and Cooking</a>
                            <a href='#'>Fashion and Beauty</a>
                        </div>
                    </div>
                        <div className={classes.dropDown}>
                        <button className={classes.headerBtn}>NEWS</button>
                        <div className={classes.dropDownItems}>
                            <a href='#'>Technology</a>
                            <a href='#'>Lifestyle</a>
                            <a href="#">Entertainment</a>
                            <a href="#">Health and Wellness</a>
                            <a href='#'>Travel and Adventure</a>
                            <a href='#'>Food and Cooking</a>
                            <a href='#'>Fashion and Beauty</a>
                        </div>
                    </div>
                        <div className={classes.dropDown}>
                        <button className={classes.headerBtn}>JOBS</button>
                        <div className={classes.dropDownItems}>
                            <a href='#'>Technology</a>
                            <a href='#'>Lifestyle</a>
                            <a href="#">Entertainment</a>
                            <a href="#">Health and Wellness</a>
                            <a href='#'>Travel and Adventure</a>
                            <a href='#'>Food and Cooking</a>
                            <a href='#'>Fashion and Beauty</a>
                        </div>
                    </div>
                </div>
            </div>
                <div>
                    <a><button className={classes.signIn}>Sign In</button></a>
                </div>
        </div>
    )
}
export default HeaderSection;