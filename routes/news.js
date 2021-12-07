const express = require("express");
const axios = require("axios").default;
const router = express.Router();

router.use(express.urlencoded({extended:true}));
//? Landing data 

router.get('/', async (req, res) => {
  try {
    //@ NewsAPI 

    const headlines = await axios.get(
      "https://newsapi.org/v2/top-headlines?category=general&country=in&apiKey=a807b0e6ea02423ab059084a80e07ff1"
    );

    const latest_arcs = await axios.get(
      "https://newsapi.org/v2/everything?q=gaming&language=en&sortBy=publishedAt&apiKey=a807b0e6ea02423ab059084a80e07ff1"
    );

    const technologies = await axios.get(
      "https://newsapi.org/v2/top-headlines?category=technology&country=in&apiKey=a807b0e6ea02423ab059084a80e07ff1"
    );

    const buisness = await axios.get(
      "https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=a807b0e6ea02423ab059084a80e07ff1"
    );

    const sports = await axios.get(
      "https://newsapi.org/v2/top-headlines?category=sports&country=in&apiKey=a807b0e6ea02423ab059084a80e07ff1"
    );

    const entertainment = await axios.get(
      "https://newsapi.org/v2/top-headlines?category=entertainment&country=in&apiKey=a807b0e6ea02423ab059084a80e07ff1"
    );

    res.render("index", {
      headline: headlines.data.articles,
      latest: latest_arcs.data.articles,
      technology: technologies.data.articles,
      buisness_news: buisness.data.articles,
      sports: sports.data.articles,
      entertainment: entertainment.data.articles
    });
  } catch (e) {
    console.error(`${e}`);
  }
})


//% Technology Page

router.get("/show/technology", async (req, res) => {
  try {
    const technology = await axios.get(
      "https://newsapi.org/v2/top-headlines?category=technology&country=in&apiKey=a807b0e6ea02423ab059084a80e07ff1"
    );

    const more_tech = await axios.get(
      "https://newsapi.org/v2/top-headlines?category=technology&country=us&apiKey=a807b0e6ea02423ab059084a80e07ff1"
    );

    res.render("technology", {
      technology: technology.data.articles,
      tech: more_tech.data.articles
    });

  } catch (e) {

    console.log(`Error ${e}`);
  }
});



//* Buisness Page


router.get('/show/buisness', async (req, res) => {
  try {
    const buisness = await axios.get(
      "https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=a807b0e6ea02423ab059084a80e07ff1"
    );

    const more_buisness = await axios.get(
      "https://newsapi.org/v2/top-headlines?category=business&country=us&apiKey=a807b0e6ea02423ab059084a80e07ff1"
    );
    res.render('buisness', {
      buisness: buisness.data.articles,
      more_buisness: more_buisness.data.articles
    })
  } catch (e) {

    console.log(`Error ${e}`);

  }
})




//$ Sports Page


router.get("/show/sports", async (req, res) => {
  try {
    const sports = await axios.get(
      "https://newsapi.org/v2/top-headlines?category=sports&country=in&apiKey=a807b0e6ea02423ab059084a80e07ff1"
    );

    const more_sports = await axios.get(
      "https://newsapi.org/v2/top-headlines?category=sports&country=us&apiKey=a807b0e6ea02423ab059084a80e07ff1"
    );
    res.render("sports", {
      sports: sports.data.articles,
      more_sports: more_sports.data.articles
    });
  } catch (e) {

    console.log(`Error ${e}`);
  }
});



//^ Entertainment Page

router.get("/show/entertainment", async (req, res) => {
  try {
    const entertainment = await axios.get(
      "https://newsapi.org/v2/top-headlines?category=entertainment&country=in&apiKey=a807b0e6ea02423ab059084a80e07ff1"
    );

    const more_entertainment = await axios.get(
      "https://newsapi.org/v2/top-headlines?category=entertainment&country=us&apiKey=a807b0e6ea02423ab059084a80e07ff1"
    );

    res.render("entertainment", {
      entertainment: entertainment.data.articles,
      more_entertainment: more_entertainment.data.articles

    });
  } catch (e) {
    console.log(`Error ${e}`);
  }
});









// @ POST

router.post('/show', async (req, res) => {
  try{
  const {search} = req.body;
  console.log(search);
  const news = await axios.get(
    `https://newsapi.org/v2/everything?q=${search}&apiKey=a807b0e6ea02423ab059084a80e07ff1`
  );

  res.render('show', {
    news: news.data.articles,
    search:search
  })
} catch(e){
  console.log(`Error`);
}
})



module.exports = router;