const team = {
    _players: [
        {
            firstname: "Dan",
            lastName: "Jones",
            age: 27,
        },
        {
            firstname: "Jess",
            lastName: "Capes",
            age: 35,
        },
        { firstname: "Amy", lastname: "Garrod", age: 21 },
    ],
    _games: [
        {
            opponent: "Manchester",
            teamPoints: 5,
            opponentPoints: 4,
        },
        {
            opponent: "southampton",
            teamPoints: 3,
            opponentPoints: 7,
        },
        {
            opponent: "Leeds",
            teamPoints: 6,
            opponentPoints: 10,
        },
    ],
    get players() {
        return team._players;
    },
    get games() {
        return team._games;
    },

    addPlayer(newFirstName, newLastName, newAge) {
        let player = {
            FirstName: newFirstName,
            lastName: newLastName,
            age: newAge,
        }; const team = {
            _players: [
                {
                    firstname: "Dan",
                    lastName: "Jones",
                    age: 27,
                },
                {
                    firstname: "Jess",
                    lastName: "Capes",
                    age: 35,
                },
                { firstname: "Amy", lastname: "Garrod", age: 21 },
            ],
            _games: [
                {
                    opponent: "Manchester",
                    teamPoints: 5,
                    opponentPoints: 4,
                },
                {
                    opponent: "southampton",
                    teamPoints: 3,
                    opponentPoints: 7,
                },
                {
                    opponent: "Leeds",
                    teamPoints: 6,
                    opponentPoints: 10,
                },
            ],
            get players() {
                return team._players;
            },
            get games() {
                return team._games;
            },

            addPlayer(newFirstName, newLastName, newAge) {
                let player = { FirstName: newFirstName, lastName: newLastName, age: newAge }
                this._players.push(player)
            },

            addGame(newOpponent, newTeamPoints, newOpponentPoints) {
                let game = { opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints }
                this._games.push(game)
            }

        };

        team.addPlayer('Bugs', 'Bunny', '76')
        team.addGame('Titans', 100, 98)
        console.log(team.games);
        this._players.push(player);
    },

    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        let game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints,
        };
        this._games.push(game);
    },
};

team.addPlayer("Bugs", "Bunny", "76");
team.addGame("Titans", 100, 98);
console.log(team.games);