module.exports = {
    rosterMapper: (roster) => {
        const rosterRoles = {
            tanks: [],
            healers: [],
            damageDealers: []
        };

        roster.forEach(player => {
            switch (player[2]) {
                case 'Tank':
                    rosterRoles.tanks.push({
                        player: player[1],
                        specialization: player[0].replace('(', ' ').replace(')', ''),
                        role: player[2],
                        profession1: player[3],
                        profession2: player[4],
                        attuned: player[5]
                    })
                    break;
                case 'Heal':
                    rosterRoles.healers.push({
                        player: player[1],
                        specialization: player[0].replace('(', ' ').replace(')', ''),
                        role: player[2],
                        profession1: player[3],
                        profession2: player[4],
                        attuned: player[5]
                    })
                    break;
                case 'DPS':
                    rosterRoles.damageDealers.push({
                        player: player[1],
                        specialization: player[0].replace('(', ' ').replace(')', ''),
                        role: player[2],
                        profession1: player[3],
                        profession2: player[4],
                        attuned: player[5]
                    })
                    break;
            }
        });

        return rosterRoles;
    }
}
