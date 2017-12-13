const data = {
  "practice": {
    "days": [{
      "date": "Day 1 - Wednesday, 20 December, 2017",
      "teams": ["royal", "hawk", "slingers", "lions"],
      "matches": [
        { "matchNo": 1, "teams": ["royal", "slingers" ], "time": "7:00 PM"},
        { "matchNo": 2, "teams": ["hawk", "lions" ], "time": "7:15 PM"},
        { "matchNo": 3, "teams": ["royal", "lions" ], "time": "7:30 PM"},
        { "matchNo": 4, "teams": ["hawk", "slingers" ], "time": "7:45 PM"}
      ]
    }, {
      "date": "Day 2 - Thrusday, 21 December, 2017",
      "teams": ["guts", "hit", "goblin", "musketeers"],
      "matches": [
        { "matchNo": 1, "teams": ["guts", "hit" ], "time": "7:00 PM"},
        { "matchNo": 2, "teams": ["guts", "hit" ], "time": "7:15 PM"},
        { "matchNo": 3, "teams": ["goblin", "musketeers" ], "time": "7:30 PM"},
        { "matchNo": 4, "teams": ["goblin", "musketeers" ], "time": "7:45 PM"}
      ]
    }]
  },
  "tournament": {
    "days": [{
      "date": "Day 1 - Tuesday, 26 December, 2017",
      "teams": ["royal", "hawk", "goblin"],
      "matches": [
        { "matchNo": 1, "teams": ["royal", "hawk" ], "time": "7:00 PM"},
        { "matchNo": 2, "teams": ["hawk", "goblin" ], "time": "7:15 PM"},
        { "matchNo": 3, "teams": ["royal", "goblin" ], "time": "7:30 PM"},
        { "matchNo": 4, "matchName": "Qualifier 1", "teams": [], "time": "7:45 PM"}
      ]
    }, {
      "date": "Day 2 - Wednesday, 27 December, 2017",
      "teams": ["lions", "slingers", "musketeers"],
      "matches": [
        { "matchNo": 1, "teams": ["lions", "slingers" ], "time": "7:00 PM"},
        { "matchNo": 2, "teams": ["slingers", "musketeers" ], "time": "7:15 PM"},
        { "matchNo": 3, "teams": ["lions", "musketeers" ], "time": "7:30 PM"},
        { "matchNo": 4, "matchName": "Qualifier 2", "teams": [], "time": "7:45 PM"}
      ]
    }, {
      "date": "Day 3 - Thrusday, 28 December, 2017",
      "teams": ["guts", "hit", "Winner of Semi - 1", "Winner of Semi - 2"],
      "matches": [
        { "matchNo": 1, "teams": ["guts", "hit" ], "time": "7:00 PM"},
        { "matchNo": 2, "teams": ["guts", "hit" ], "time": "7:15 PM"},
        { "matchNo": 3, "matchName": "Final", "teams": [], "time": "7:30 PM"}
      ]
    }]
  }
};

export default data;