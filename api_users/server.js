require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connectDB = require("./db")
const userRoutes = require("./routes/users") 

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000

connectDB()

app.use("/users", userRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
