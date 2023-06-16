import react from 'react';
import business from './business.jpg';
import economy from './economy.jpg';
import education from './education.jpg';
import health from './health.jpg';
import mental from './mental.jpg';
import money from './money.jpg';
import war from './war.jpg';
import lastBlog from './lastBlog.jpg';
import worldOrder from './worldorder.jpg';
import coverImg from './coverImg.jpg';
import classes from './blogCards.module.css';

const blogCards = () => {
    return(
        <div className={classes.title}>
            <img src={coverImg} alt="connecting image" className={classes.coverImg} />
            <h1>SOME OF THE TREDING BLOGS</h1>
        <div className={classes.wrapper}>
            <div className={classes.blogCard}>
                <img src={business} alt="business" className={classes.cardImg} />
                <p>
                    <h2>The Dynamics of Business</h2>
                    In the fast-paced and ever-evolving landscape of the modern world, business has become 
                </p>
                <br></br>
                <a>continue reading this blog?</a>
            </div>
            <div className={classes.blogCard}>
                <img src={economy} alt="economy" className={classes.cardImg} />
                <p>
                    <h2>Navigating the Economic </h2>
                    The economy is the lifeblood of any nation, shaping the livelihoods and opportunities available to individuals and businesses alike. 
                </p>
                <br></br>
                <a>continue reading this blog?</a>
            </div>
            <div className={classes.blogCard}>
                <img src={education} alt="education" className={classes.cardImg} />
                <p>
                    <h2>Minds</h2>
                    Education is a cornerstone of human progress, empowerment, and societal development. It equips individuals with knowledge, skills, benefits.
                </p> 
                    <br></br>
                    <a>continue reading this blog?</a>
            </div>
            <div className={classes.blogCard}>
                <img src={health} alt="health" className={classes.cardImg} />
                <p>
                    <h2>Prioritizing Health</h2>
                    Health is the foundation of a fulfilling and vibrant life. It encompasses physical, mental, and emotional well-being, and influences our.
                </p>
                    <br></br>
                    <a>continue reading this blog?</a>
                
            </div>
            <div className={classes.blogCard}>
                <img src={mental} alt="mental" className={classes.cardImg} />
                <p>
                    <h2>Mental Health</h2>
                    Mental health is an integral aspect of our overall well-being, influencing how we think, feel, and navigate through life's challenges.
                </p>
                    <br></br>
                    <a>continue reading this blog?</a>
                
            </div>
            <div className={classes.blogCard}>
                <img src={money} alt="money" className={classes.cardImg} />
                <p>
                    <h2>Financial Well-being</h2>
                    Money is a fundamental aspect of our lives, shaping our choices, opportunities, and future prospects. It serves as a medium of exchange.
                </p>
                <br></br>
                <a>continue reading this blog?</a>
            </div>
            <div className={classes.blogCard}>
                <img src={war} alt="war" className={classes.cardImg} />
                <p>
                    <h2> Consequences War</h2>
                    War, the epitome of human conflict, has shaped the course of history, leaving a trail of destruction and upheaval in its wake. In this blog level.
                </p>
                <br></br>
                <a>continue reading this blog?</a>
            </div>
            <div className={classes.blogCard}>
                <img src={worldOrder} alt="world order" className={classes.cardImg} />
                <p>
                    <h2>New World Order</h2>
                    The concept of a "New World Order" has been the subject of speculation, debate, and conspiracy theories for decades. In this blog, we explore the idea 
                    </p>
                <br></br>
                <a>continue reading this blog?</a>
            </div>
            <div className={classes.blogCard}>
                <img src={lastBlog} alt="world order" className={classes.cardImg} />
                <p>
                    <h2>New World Order</h2>
                    The concept of a "New World Order" has been the subject of speculation, debate, and conspiracy theories for decades. In this blog, we explore the idea 
                    </p>
                <br></br>
                <a>continue reading this blog?</a>
            </div>
            <a href='https://www.huffpost.com/'><h2>Keep reading more blogs ....</h2></a>
        </div>
        </div>
    )
}

export default blogCards