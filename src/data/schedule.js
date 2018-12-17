const data = {
  "practice": {
    "days": [{
      "date": "Day 1 - Tuesday, 18 December, 2018",
      "teams": ["royal", "hawk", "slingers", "lions"],
      "matches": [
        { "matchNo": 1, "teams": ["royal", "slingers" ], "time": "7:00 PM"},
        { "matchNo": 2, "teams": ["hawk", "lions" ], "time": "7:15 PM"},
        { "matchNo": 3, "teams": ["royal", "lions" ], "time": "7:30 PM"},
        { "matchNo": 4, "teams": ["hawk", "slingers" ], "time": "7:45 PM"}
      ]
    }, {
      "date": "Day 2 - Thrusday, 20 December, 2018",
      "teams": ["guts", "hit", "goblin", "musketeers"],
      "matches": [
        { "matchNo": 1, "teams": ["guts", "hit" ], "time": "7:00 PM"},
        { "matchNo": 2, "teams": ["goblin", "musketeers" ], "time": "7:30 PM"},
        { "matchNo": 3, "teams": ["goblin", "musketeers" ], "time": "7:45 PM"}
      ]
    }]
  },
  "tournament": {
    "days": [{
      "date": "Day 1 - Tuesday, 25 December, 2018",
      "teams": ["royal", "hawk", "goblin"],
      "matches": [
        { "matchNo": 1, "teams": ["royal", "hawk" ], "time": "7:00 PM"},
        { "matchNo": 2, "teams": ["hawk", "goblin" ], "time": "7:20 PM"},
        { "matchNo": 3, "teams": ["royal", "goblin" ], "time": "7:40 PM"}
      ]
    }, {
      "date": "Day 2 - Wednesday, 26 December, 2018",
      "teams": ["lions", "slingers", "musketeers"],
      "matches": [
        { "matchNo": 1, "teams": ["lions", "slingers" ], "time": "7:00 PM"},
        { "matchNo": 2, "teams": ["slingers", "musketeers" ], "time": "7:20 PM"},
        { "matchNo": 3, "teams": ["lions", "musketeers" ], "time": "7:40 PM"}
      ]
    }, {
      "date": "Day 3 - Thrusday, 27 December, 2018",
      "teams": ["guts", "hit", "Winner of Semi - 1", "Winner of Semi - 2"],
      "matches": [
        { "matchNo": 1, "matchName": "Qualifier 1", "teams": [], "time": "7:00 PM"},
        { "matchNo": 2, "teams": ["guts", "hit" ], "time": "7:20 PM"},
        { "matchNo": 3, "matchName": "Qualifier 2", "teams": [], "time": "7:50 PM"},
        { "matchNo": 4, "teams": ["guts", "hit" ], "time": "8:20 PM"},
        { "matchNo": 5, "matchName": "Final", "teams": [], "time": "8:40 PM"}
      ]
    }]
  }
};

export default data;