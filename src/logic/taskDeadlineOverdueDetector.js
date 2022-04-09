const moment = require("moment");

const taskDeadlineOverdueDetector = (deadline) => {
    return moment().isAfter(moment(deadline))
}

module.exports = {
    taskDeadlineOverdueDetector,
}