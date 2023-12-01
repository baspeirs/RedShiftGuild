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
                    rosterRoles.tanks.push({player: player[1], specialization: player[0]})
                    break;
                case 'Heal':
                    rosterRoles.healers.push({player: player[1], specialization: player[0]})
                    break;
                case 'DPS':
                    rosterRoles.damageDealers.push({player: player[1], specialization: player[0]})
                    break;
            }
        });

        return rosterRoles;
    }
}
