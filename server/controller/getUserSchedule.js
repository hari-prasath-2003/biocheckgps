const Schedule = require("../modal/schedule")


async function getUserDataPendng(id) {
    const schedule = await Schedule.find({ uid: id, status: { $eq: "pending" } })
    return schedule
}
async function getUserDataHistory(id) {
    const schedule = await Schedule.find({ uid: id, status: { $ne: "pending" } })
    return schedule
}
async function getSchedule(id) {
    const schedule = await Schedule.findById(id)
    return schedule
}

module.exports = { getUserData: getUserDataPendng, getUserDataHistory: getUserDataHistory, getSchedule: getSchedule }