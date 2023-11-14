const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const getHTML = async (keyword) => {
  try {
    return axios.get(
      "https://blog.naver.com/PostList.naver?blogId=gyeyang_gu&from=postList&categoryNo=52&parentCategoryNo=52" +
        encodeURI(keyword)
    );
  } catch (err) {
    console.log(err);
  }
};


const parsing = async (keyword) => {
  const html = await getHTML(keyword);
  //console.log(html);
  const $ = cheerio.load(html.data);
  const $courseList = $(".item > a");

  let course = [];
  $courseList.each((idx, node) => {
    const title = $(node).find(".area_text > strong").text();
    course.push({
      title: $(node).find(".area_text > strong").text(),
      date: $(node).find(".area_text > span.date").text(),
    });
  });
  const jsonData = JSON.stringify(course, null, 2);
  fs.writeFileSync("event-news.json", jsonData);

  
};

parsing("");
