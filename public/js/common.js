const cheerio = require("cheerio");
const axios = require("axios");

async function getData() {
  const html = await axios.get(
      "https://www.gyeyang.go.kr/open_content/main/bbs/bbsMsgList.do?bcd=board_4&pgno=1"
    ),
    $ = cheerio.load(html.data);

  const trs = $("#detail_con > div.general_board > table > tbody > tr");
  const tbody = $("#detail_con > div.general_board > table > tbody");
  const arr = [];
  for (let i = 1; i <= trs.length; i++) {
    const data = tbody
      .map((_, tr) => ({
        title: $(tr).find(`tr:nth-child(${i}) > td.left.title > a`).text(),
      }))
      .toArray()[0];
    arr.push(data);
  }

  return arr;
}

getData().then((value) => console.log(value));
