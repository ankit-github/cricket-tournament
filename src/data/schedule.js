const data = {
  "practice": {
    "days": [{
      "date": "Wednesday, 20 December, 2017",
      "teams": ["team-1", "team-2", "team-3", "team-4"],
      "matches": [
        { "matchNo": 1, "teams": "team-1 Vs team-3", "time": "7:00 PM"},
        { "matchNo": 2, "teams": "team-2 Vs team-4", "time": "7:15 PM"},
        { "matchNo": 3, "teams": "team-1 Vs team-4", "time": "7:30 PM"},
        { "matchNo": 4, "teams": "team-2 Vs team-3", "time": "7:45 PM"}
      ]
    }, {
      "date": "Thrusday, 21 December, 2017",
      "teams": ["Girls team-1", "Girls team-2", "team-5", "team-6"],
      "matches": [
        { "matchNo": 1, "teams": "Girls team-1 Vs Girls team-2", "time": "7:00 PM"},
        { "matchNo": 2, "teams": "Girls team-1 Vs Girls team-2", "time": "7:15 PM"},
        { "matchNo": 3, "teams": "team-5 Vs team-6", "time": "7:30 PM"},
        { "matchNo": 4, "teams": "team-5 Vs team-6", "time": "7:45 PM"}
      ]
    }]
  },
  "tournament": {
    "days": [{
      "date": "Tuesday, 26 December, 2017",
      "teams": ["team-1", "team-2", "team-3"],
      "matches": [
        { "matchNo": 1, "teams": "team-1 Vs team-2", "time": "7:00 PM"},
        { "matchNo": 2, "teams": "team-2 Vs team-3", "time": "7:15 PM"},
        { "matchNo": 3, "teams": "team-1 Vs team-3", "time": "7:30 PM"},
        { "matchNo": 4, "teams": "Semi - 1", "time": "7:45 PM"}
      ]
    }, {
      "date": "Wednesday, 27 December, 2017",
      "teams": ["team-4", "team-5", "team-6"],
      "matches": [
        { "matchNo": 1, "teams": "team-4 Vs team-5", "time": "7:00 PM"},
        { "matchNo": 2, "teams": "team-5 Vs team-6", "time": "7:15 PM"},
        { "matchNo": 3, "teams": "team-4 Vs team-6", "time": "7:30 PM"},
        { "matchNo": 4, "teams": "Semi - 2", "time": "7:45 PM"}
      ]
    }, {
      "date": "Thrusday, 28 December, 2017",
      "teams": ["Girls team-1", "Girls team-2", "Winner of Semi - 1", "Winner of Semi - 2"],
      "matches": [
        { "matchNo": 1, "teams": "Girls team-1 Vs Girls team-2", "time": "7:00 PM"},
        { "matchNo": 2, "teams": "Girls team-1 Vs Girls team-2", "time": "7:15 PM"},
        { "matchNo": 3, "teams": "Final", "time": "7:30 PM"}
      ]
    }]
  }
};

export default data;