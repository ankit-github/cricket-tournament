const rules = {
  areas:[
    {
      name: "Bonus Over",
      rules: [
        "Before toss, both captains will inform which over of their batting innings will be bonus over",
        "In bonus over, run scored by batting team will be doubled",
        "After umpire declare current over as bonus over and bowler reach at bowling side, bowling side captain cannot change that bowler"
      ]
    },
    {
      name: "Scoring",
      rules: [
        "Batsman can run for score only after ball touches with bat. No bye runs.",
        "Boundries will be considered only if ball touches the net.",
        "If ball touches boundry nets inside post, runs will be doubled. i.e. 8 / 12",
        "1 penalty run will be added for No ball & wide ball.",
        "There will be a free hit after each no ball.",
        "Over throw runs are allowed.",
        "Leg bye Runs will not be counted",
        "Batsman will change their ends after completion of over"
      ]
    }, 
    {
      name: "Batsman will be considered out ...",
      rules: [
        "Bowled", "Catch", "Stump Out", "Run out",
        "If ball touches directly on top roof (net / iron rod)",
        "Hit wicket",
        "In case of run out when stumps are not on place - if fielder touched ball to stump/base before batsman gets inside crease."
      ]
    },
    {
      name: "Fielding",
      rules: [
        "Wicket keepar compulsory",
        "Fielders are not allowed to field between bowler and goal post."
      ]
    },
    {
      name: "Bowling",
      rules: [
        "6 ball over",
        "Bowler can not take running to deliver ball",
        "Under arm ball will be considered as dead ball",
        "Each player from fielding side must be given an over",
        "One player can not bowl continous overs if he/she can bowl more than 1 overs in a match"
      ]
    },
    {
      name: "Others",
      rules: [
        "Umpire Decesion will be final in any case. [Fastball, Runout, Wide, etc..]",
        "Stump side line will be considered for no ball and runout"
      ]
    },
    {
      name: "Girls",
      rules: [
        "5 over game",
        "2 run declare on side nets behind middle line.",
        "Wide line will be extended for 1 feet.",
        "Wicket keeper is optional"
      ]
    }
  ]
};

export default rules;