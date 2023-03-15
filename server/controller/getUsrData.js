const User = require("../modal/user")


async function getUserProfile(id) {
    const user = await User.findOne({ uid: id })
    return user
}

module.exports = getUserProfile