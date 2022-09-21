const express = require("express");

const router = express.Router;

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

router.get("/login", (req, res) => {
  res.render("login", { title: "로그인 - NodeBird" });
});

router.get("/", (req, res, next) => {
    const twist = [];
    res.render('main', {
        title: 'NodeBird',
        twist,
    })
})
