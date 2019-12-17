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
        { "matchNo": 1, "teams": ["knights", "ieagles" ], "time": "7:00 PM"},
        { "matchNo": 2, "teams": ["chaser", "mojila"  ], "time": "7:20 PM"},
        { "matchNo": 3, "teams": ["beagles","spirit" ], "time": "7:40 PM"}
      ]
    },
    { 
      "date": "Day 3 - Thursday, 12 December, 2019",
      "teams": ["spirit", "ieagles", "stars", "knights", "eagles", "dominators"],
      "matches": [
        { "matchNo": 1, "teams": ["spirit", "knights" ], "time": "7:00 PM"},
        { "matchNo": 2, "teams": ["ieagles", "stars" ], "time": "7:20 PM"},
        { "matchNo": 3, "teams": ["eagles", "dominators" ], "time": "7:40 PM"}
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
        { "matchNo": 6, "teams": [ "beagles","stars" ], "time": "8:40 PM"}
      ]
    }, {
      "date": "Day 2 - Tuesday, 17 December, 2019",
      "teams": [ "eagles", "dominators" ],
      "matches": [
        { "matchNo": 1, "teams": ["eagles", "dominators" ], "time": "7:00 PM"},
        { "matchNo": 2, "teams": ["dominators", "eagles" ], "time": "7:30 PM"},
      ]
    }, {
      "date": "Day 3 - Wednesday, 18 December, 2019",
      "teams": ["stars","chaser","beagles","knights","mojila","tigers","spirit","ieagles"],
      "matches": [
        { "matchNo": 1, "teams": ["spirit", "ieagles" ], "time": "7:00 PM"},
        { "matchNo": 2, "teams": ["stars", "knights" ], "time": "7:20 PM"},        
        { "matchNo": 3, "teams": ["mojila", "spirit" ], "time": "7:40 PM"},
        { "matchNo": 4, "teams": ["mojila", "tigers" ], "time": "8:00 PM"},
        { "matchNo": 5, "teams": ["chaser", "beagles" ], "time": "8:20 PM"},
        { "matchNo": 6, "teams": ["tigers", "ieagles" ], "time": "8:40 PM"},
        
      ]
    }, {
      "date": "Day 4 - Thrusday, 19 December, 2019",
      "teams": ["stars","chaser","beagles","knights","mojila","tigers","spirit","ieagles"],
      "matches": [
        { "matchNo": 1, "matchName": "Qualifier 1", "teams": [], "time": "7:00 PM"},
        { "matchNo": 2, "matchName": "Qualifier 2", "teams": [], "time": "7:30 PM"},
        { "matchNo": 3, "matchName": "Girls Final / SPL", "teams": [ ], "time": "8:00 PM"},
        { "matchNo": 4, "matchName": "Final", "teams": [], "time": "8:30 PM"}
      ]
    }]
  }
};

export default data;