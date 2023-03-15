const express = require('express')
const app = express()
const port = 3000
const mongoose = require("mongoose")
const getUserProfile = require('./controller/getUsrData')
const { getUserData, getUserDataHistory, getSchedule } = require("./controller/getUserSchedule")
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/biometric")
app.use(express.json())
app.get('/:id', async (req, res) => {
    const homeInfo = await getUserProfile(req.params.id)
    const pending = await getUserData(req.params.id)
    const history = await getUserDataHistory(req.params.id)
    const userInfo = { profile: homeInfo, pending: pending, history: history }
    console.log(userInfo)
    res.send(userInfo);
    console.log("hi");
})
app.get('/history/:id', async (req, res) => {
    const history = await getUserDataHistory(req.params.id)
    res.send(history);
    console.log("hi");
})
app.post("/attendance", async (req, res) => {
    const data = req.body
    const schedule = await getSchedule(data.id)
    schedule.status = "present"
    await schedule.save()
    res.send(schedule)

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))