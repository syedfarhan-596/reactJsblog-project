import logo from './logo.svg';
import Header from './blog-header/header';
import BlogCards from './blogCards/blogCards';
import SectionNews from './sectionNews/sectionNews';
import Footer from './footer/footer';
import JobNews from './jobnews/jobnews';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.wrapper}>
      <Header />
      <br></br>
      <BlogCards />
      </div>
      <div className={classes.newsJobWrapper}>
      <SectionNews />
      <JobNews />
      </div>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
