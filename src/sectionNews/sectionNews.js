import react from 'react';
import movie from './movieNews.jpg';
import secretariat from './secretariat.jpg';
import car from './car.jpg';
import chennai from './chennai.jpg';
import stocks from './stocks.jpg';
import classes from './sectionNews.module.css';

const sectionNews = () => {
    return(
        <div className={classes.newsWrapper}>
            <div className={classes.title}>
                <h1 className={classes.a}>Go with the Lastes News</h1>
            </div>
            <div className={classes.newsCards}>
                <img className={classes.normalNews} src={movie} alt="KGF" />
                <p>Prashanth Neel's KGF, which stars Yash in the lead, has become arguably the most spoken about Kannada film nationally. The expectations have been enormous. Does the team deliver? Yes, they do. The film has a fast-paced first half, which does seem a little long, but the second half and the climax sets up the right premise for the second part of the film.
                The screenplay is the most interesting part of the film. The non-linear pattern keeps the viewers engaged, with the growth of Rocky being shown in a steady fashion. While there are a fair share of scenes and dialogues that bring out the hoots and cheers from the masses, the makers have still maintained a clever story telling pattern that assures one to also keep pace with the narrative. The film traverses from 1951 to 2018, while maintaining a sense of curiosity as each character is unveiled.
                the movie broke all records with collection of 1000cr box-office
                </p>
                <h2 className={classes.a}>Click here to know more</h2>
            </div>

            <div className={classes.flexNews}>
                <div className={classes.newsCardsDiff}>
                    <img src={secretariat} className={classes.flexItemImg} alt="secretariat" />
                        <p>This is what happened in telangana on the occation of TELANGANA FORMATION DAY
                        elangana State Government decided to organize the decennial celebrations of Telangana ....
                        </p>
                        <h2 className={classes.a}>Click here to know more</h2>
                </div>
                <div className={classes.newsCardsDiff}>
                    
                        <img src={car} className={classes.flexItemImg} alt="car Accident" />
                        <p>
                            A car was seen precariously hanging from a high wall on Wednesday evening crashed into the railing wall of a multistoried building at Raj Bhavan road in Hyderabad which ...</p>
                        <h2 className={classes.a}>Click here to know more</h2>

                </div>
                <div className={classes.newsCardsDiff}>
                        <img src={stocks} className={classes.flexItemImg} alt="car Accident" />
                        <p>
                            The stock market is been high from several days evening crashed into the railing which is a positive for the new traders to join the stock market for options trading or day trading ...</p>
                        <h2 className={classes.a}>Click here to know more</h2>

                </div>
            </div>
            <div className={classes.newsCards}>

                    <img className={classes.normalNews1} src={chennai} alt="chennai" />
                    <p>After a riveting two months, the Indian Premier League has come to an end with a thrilling final between Chennai Super Kings and Gujarat Titans. The two teams finished at the top of the points table and looked destined to play in the finals with their strong lineups and leadership.</p>
                    <p> Hardik Pandya commanded the Gujarat Titans, having successfully led the team to its maiden IPL title in 2022. Living-legend MS Dhoni again helmed the captaincy of Chennai Super Kings and managed to secure the final spot a record 10th time. He has played an overall 11 finals in the Indian Premier League.</p>
                     <p>The much-anticipated match faced a major setback on the designated date, May 28, 2023, when rain forced a delay to the reserved day: May 29. however, the subsequent day wasn’t any better either with rain pouring during the evening. Thankfully, the skies cleared at night and the match began without any delays.
                     </p>
                     <h2 className={classes.a}>Click here to know more</h2>
            </div>
            
        </div>
    )
}

export default sectionNews;