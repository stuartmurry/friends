var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", (req, res) => {
    res.send(friends);
  });
  app.post("/api/friends", (req, res) => {
    //req.body requires body-parser plugin
    console.log(req.body); 

    var diffs = req.body.scores.map(i => parseInt(i));

    var result = friends.map(f => {
      diff2 = f.scores.map(i => parseInt(i));
      return {
        name : f.name,
        score : diffs.reduce((a,c,i) =>  a + Math.abs(c - diff2[i]))
      }
    });

    console.log('are we friends');
    var sorted = result.sort((o1, o2) => o1.score - o2.score);
    console.log(sorted[0]);
    res.send(friends.filter(f => f.name == sorted[0].name)[0]);
  });
};
