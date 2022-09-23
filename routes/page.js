const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = null;
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followerList = [];
  next();
});

router.get("/proflie", (req, res) => {
  res.render("profile", { title: "내 정보 - NodeBird" });
});

router.get("/join", (req, res) => {
  res.render("join", { title: "회원 가입 - NodeBird" });
});

router.get("/", (req, res, next) => {
  const twist = [];
  res.render("main", {
    title: "NodeBird",
    twist,
  });
});

module.exports = router;
