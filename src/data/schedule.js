const data = {
  "practice": {
    "days": [{
      "date": "Day 1 - Tuesday, 10 December, 2019",
      "teams": ["tigers", "spirit", "stars", "chaser", "beagles", "mojila"],
      "matches": [
        { "matchNo": 1, "teams": ["stars", "mojila" ], "time": "7:00 PM"},
        { "matchNo": 2, "teams": [ "tigers","chaser" ], "time": "7:20 PM"},
        { "matchNo": 3, "teams": ["beagles", "tigers" ], "time": "7:40 PM"}
      ]
    }, {
      "date": "Day 2 - Wednesday, 11 December, 2019",
      "teams": ["tigers", "ieagles", "knights", "chaser", "beagles", "mojila"],
      "matches": [
        { "matchNo": 4, "teams": ["knights", "ieagles" ], "time": "7:00 PM"},
        { "matchNo": 5, "teams": ["mojila", "chaser" ], "time": "7:20 PM"},
        { "matchNo": 6, "teams": ["spirit", "beagles" ], "time": "7:40 PM"}
      ]
    },
    { 
      "date": "Day 3 - Thursday, 12 December, 2019",
      "teams": ["spirit", "ieagles", "stars", "knights", "eagles", "dominators"],
      "matches": [
        { "matchNo": 7, "teams": ["spirit", "knights" ], "time": "7:00 PM"},
        { "matchNo": 8, "teams": ["ieagles", "stars" ], "time": "7:20 PM"},
        { "matchNo": 9, "teams": ["eagles", "dominators" ], "time": "7:40 PM"}
      ]
    }]
  },
  "tournament": {
    "days": [{
      "date": "Day 1 - Monday, 16 December, 2019",
      "teams": ["stars","chaser","beagles","knights","mojila","tigers","spirit","ieagles"],
      "matches": [
        { "matchNo": 1, "teams": ["stars", "chaser" ], "time": "7:00 PM"},
        { "matchNo": 2, "teams": ["beagles", "knights" ], "time": "7:20 PM"},
        { "matchNo": 3, "teams": ["mojila", "ieagles" ], "time": "7:40 PM"},
        { "matchNo": 4, "teams": ["tigers", "spirit" ], "time": "8:00 PM"},
        { "matchNo": 5, "teams": ["chaser", "knights" ], "time": "8:20 PM"},
        { "matchNo": 6, "teams": ["stars", "beagles" ], "time": "8:40 PM"}
      ]
    }, {
      "date": "Day 2 - Tuesday, 17 December, 2019",
      "teams": [ "eagles", "dominators" ],
      "matches": [
        { "matchNo": 7, "teams": ["eagles", "dominators" ], "time": "7:00 PM"},
        { "matchNo": 8, "teams": ["dominators", "eagles" ], "time": "7:30 PM"},
      ]
    }, {
      "date": "Day 3 - Wednesday, 18 December, 2019",
      "teams": ["stars","chaser","beagles","knights","mojila","tigers","spirit","ieagles"],
      "matches": [
        { "matchNo": 9, "teams": ["mojila", "tigers" ], "time": "7:00 PM"},
        { "matchNo": 10, "teams": ["spirit", "ieagles" ], "time": "7:20 PM"},
        { "matchNo": 11, "teams": ["stars", "knights" ], "time": "7:40 PM"},
        { "matchNo": 12, "teams": ["chaser", "beagles" ], "time": "8:00 PM"},
        { "matchNo": 13, "teams": ["tigers", "ieagles" ], "time": "8:20 PM"},
        { "matchNo": 14, "teams": ["mojila", "spirit" ], "time": "8:40 PM"}
      ]
    }, {
      "date": "Day 4 - Thrusday, 19 December, 2019",
      "teams": ["stars","chaser","beagles","knights","mojila","tigers","spirit","ieagles"],
      "matches": [
        { "matchNo": 15, "matchName": "Qualifier 1", "teams": [], "time": "7:00 PM"},
        { "matchNo": 16, "matchName": "Qualifier 2", "teams": [], "time": "7:30 PM"},
        { "matchNo": 17, "matchName": "Girls Final / SPL", "teams": [ ], "time": "8:00 PM"},
        { "matchNo": 18, "matchName": "Final", "teams": [], "time": "8:30 PM"}
      ]
    }]
  }
};

export default data;