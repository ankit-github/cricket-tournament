const data = {
  "practice": {
    "days": [{
      "date": "Day 1 - Tuesday, 18 December, 2018",
      "teams": ["tigers", "spirit", "phoenix", "eagles"],
      "matches": [
        { "matchNo": 1, "teams": ["tigers", "phoenix" ], "time": "7:00 PM"},
        { "matchNo": 2, "teams": ["spirit", "eagles" ], "time": "7:15 PM"},
        { "matchNo": 3, "teams": ["tigers", "eagles" ], "time": "7:30 PM"},
        { "matchNo": 4, "teams": ["spirit", "phoenix" ], "time": "7:45 PM"}
      ]
    }, {
      "date": "Day 2 - Thrusday, 20 December, 2018",
      "teams": ["smashers", "birds", "stars", "knights"],
      "matches": [
        { "matchNo": 1, "teams": ["smashers", "birds" ], "time": "7:00 PM"},
        { "matchNo": 2, "teams": ["smashers", "birds" ], "time": "7:15 PM"},
        { "matchNo": 3, "teams": ["stars", "knights" ], "time": "7:30 PM"},
        { "matchNo": 4, "teams": ["stars", "knights" ], "time": "7:45 PM"}
      ]
    }]
  },
  "tournament": {
    "days": [{
      "date": "Day 1 - Tuesday, 25 December, 2018",
      "teams": ["tigers", "spirit", "stars"],
      "matches": [
        { "matchNo": 1, "teams": ["tigers", "spirit" ], "time": "7:00 PM"},
        { "matchNo": 2, "teams": ["spirit", "stars" ], "time": "7:20 PM"},
        { "matchNo": 3, "teams": ["tigers", "stars" ], "time": "7:40 PM"}
      ]
    }, {
      "date": "Day 2 - Wednesday, 26 December, 2018",
      "teams": ["eagles", "phoenix", "knights"],
      "matches": [
        { "matchNo": 1, "teams": ["eagles", "phoenix" ], "time": "7:00 PM"},
        { "matchNo": 2, "teams": ["phoenix", "knights" ], "time": "7:20 PM"},
        { "matchNo": 3, "teams": ["eagles", "knights" ], "time": "7:40 PM"}
      ]
    }, {
      "date": "Day 3 - Thrusday, 27 December, 2018",
      "teams": ["smashers", "birds", "Winner of Semi - 1", "Winner of Semi - 2"],
      "matches": [
        { "matchNo": 1, "matchName": "Qualifier 1", "teams": ["spirit","knights"], "time": "7:00 PM"},
        { "matchNo": 2, "teams": ["smashers", "birds" ], "time": "7:20 PM"},
        { "matchNo": 3, "matchName": "Qualifier 2", "teams": ["eagles","stars"], "time": "7:50 PM"},
        { "matchNo": 4, "teams": ["smashers", "birds" ], "time": "8:20 PM"},
        { "matchNo": 5, "matchName": "Final", "teams": ['eagles', 'knights'], "time": "8:40 PM"}
      ]
    }]
  }
};

export default data;