const cheerio = require("cheerio");
const axios = require("axios");



const fetchData = async url => {
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

const getPlayerPhoto = async (playerName, teamName) => {
  let url = `http://www.espn.com/nba/players/_/search/`;
  let $ = await fetchData(url);
  let team_url;
  let playerPhoto;
  searchResult = $(
    "#my-players-table > div > div > div.mod-content > ul > li > div > a"
  ).each(function(i, elm) {
    if ($(this).text() == teamName) {
      team_url = `http://www.espn.com${$(this)["0"].attribs.href}`;
    }
  });
  $ = await fetchData(team_url);
  searchResult = $(
    "#fittPageContainer > div.StickyContainer > div.page-container.cf > div.layout.is-9-3 > div.layout__column.layout__column--1 > section > div > section > div:nth-child(2) > section > div.flex > div > div.Table__Scroller > table > tbody > tr > td:nth-child(2) > span > a"
  ).each(function(i, elm) {
    if ($(this).text() == playerName) {
      
      const href = $(this)["0"].attribs.href.split('/');
      playerPhoto = `https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/${href[href.length - 2]}.png&w=350&h=254`;
    }
  });
  return playerPhoto;
};

module.exports = {
  getPlayerPhoto
}
