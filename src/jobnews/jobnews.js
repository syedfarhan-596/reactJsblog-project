import React from "react";
import amazon from './amazon.jpg';
import flipkart from './flipkart.jpeg';
import swiggy from './swiggy.jpg';
import tcs from './tcs.jpg';
import wipro from './wipro.jpg';
import classes from './jobnews.module.css';

const jobnews = () => {
    return(
        <div className={classes.jobNewsWrapper}>
            <h1>JOB RELATED NEWS & BLOGS</h1>
            <div className={classes.jobCard}>
                <img className={classes.jobImg} src={amazon} alt="amazon" />
                <p>URGENT HIRING !!!
                Amazon is hiring all the freshers from the technical field all the students can apply</p>
                <table border="1" >
                    <tr>
                        <th>Salary</th>
                        <th>Skills</th>
                        <th rowSpan="2" colSpan="2"><button className={classes.applyBtn}>Apply</button></th>
                    </tr>
                    <tr>
                        <td>30k+</td>
                        <td>Soft Skills</td>
                    </tr>
                </table>
            </div>
            <div className={classes.jobCard}>
            <img className={classes.jobImg} src={flipkart} alt="amazon" />
                <p>
                FlipKart hiring delivery boys who can work from 9Am-10Pm delivery work</p>
                <table border="1" >
                    <tr>
                        <th>Salary</th>
                        <th>Skills</th>
                        <th rowSpan="2" colSpan="2"><button className={classes.applyBtn}>Apply</button></th>
                    </tr>
                    <tr>
                        <td>10k-20k</td>
                        <td>Driving</td>
                    </tr>
                </table>
            </div>
            <div className={classes.jobCard}>
            <img className={classes.jobImg} src={swiggy} alt="amazon" />
                <p>URGENT HIRING !!!
                Need Urgent food delivery who can deliver the food on time with safety</p>
                <table border="1" >
                    <tr>
                        <th>Salary</th>
                        <th>Skills</th>
                        <th rowSpan="2" colSpan="2"><button className={classes.applyBtn}>Apply</button></th>
                    </tr>
                    <tr>
                        <td>20k-30k</td>
                        <td>Driving</td>
                    </tr>
                </table>
            </div>
            <div className={classes.jobCard}>
            <img className={classes.jobImg} src={tcs} alt="amazon" />
                <p>
                TCS technical arena hiring fresher student who have skills in the on going technology</p>
                <table border="1" >
                    <tr>
                        <th>Salary</th>
                        <th>Skills</th>
                        <th rowSpan="2" colSpan="2"><button className={classes.applyBtn}>Apply</button></th>
                    </tr>
                    <tr>
                        <td>2L-3L</td>
                        <td>Developer</td>
                    </tr>
                </table>
            </div>
            <div className={classes.jobCard}>
            <img className={classes.jobImg} src={wipro} alt="amazon" />
                <p>
                Wipro all time great requirement all technical and non technical jobs hiring</p>
                <table border="1" >
                    <tr>
                        <th>Salary</th>
                        <th>Skills</th>
                        <th rowSpan="2" colSpan="2"><button className={classes.applyBtn}>Apply</button></th>
                    </tr>
                    <tr>
                        <td>30k+</td>
                        <td>Soft Skills</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default jobnews;