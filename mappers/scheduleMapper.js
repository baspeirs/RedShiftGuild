const days = ['MONDAYS', 'TUESDAYS', 'WEDNESDAYS', 'THURSDAYS', 'FRIDAYS', 'SATURDAYS', 'SUNDAYS']

module.exports = {
    scheduleMapper: (schedule) => {
        const mappedSchedule = {
            days: [],
            times: []
        };
        schedule.map(scheduleItem => {
            days.includes(scheduleItem.toUpperCase()) ? mappedSchedule.days.push(scheduleItem) : mappedSchedule.times.push(scheduleItem)
        });
        
        return mappedSchedule;
    }
};
