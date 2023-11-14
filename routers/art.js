const express = require("express");
const router = express.Router();

// json 파일 연결
const data = require("../jsData/art-news.json");

router.get("/", (req, res) => {
  res.render("art-news/art-news", { data });
});

router.get("/detail1", (req, res) => {
  res.render("art-news/art-news-detail1", { data });
});

router.get("/detail2", (req, res) => {
  res.render("art-news/art-news-detail2", { data });
});

router.get("/detail3", (req, res) => {
  res.render("art-news/art-news-detail3", { data });
});

router.get("/detail4", (req, res) => {
  res.render("art-news/art-news-detail4", { data });
});

router.get("/detail5", (req, res) => {
  res.render("art-news/art-news-detail5", { data });
});

router.get("/detail6", (req, res) => {
  res.render("art-news/art-news-detail6", { data });
});

router.get("/detail7", (req, res) => {
  res.render("art-news/art-news-detail7", { data });
});

router.get("/detail8", (req, res) => {
  res.render("art-news/art-news-detail8", { data });
});

router.get("/detail9", (req, res) => {
  res.render("art-news/art-news-detail9", { data });
});

router.get("/detail10", (req, res) => {
  res.render("art-news/art-news-detail10", { data });
});

router.get("/detail11", (req, res) => {
  res.render("art-news/art-news-detail11", { data });
});

router.get("/detail12", (req, res) => {
  res.render("art-news/art-news-detail12", { data });
});

router.get("/detail13", (req, res) => {
  res.render("art-news/art-news-detail13", { data });
});

router.get("/detail14", (req, res) => {
  res.render("art-news/art-news-detail14", { data });
});

router.get("/detail15", (req, res) => {
  res.render("art-news/art-news-detail15", { data });
});

router.get("/detail16", (req, res) => {
  res.render("art-news/art-news-detail16", { data });
});

module.exports = router;