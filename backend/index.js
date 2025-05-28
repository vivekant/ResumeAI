import connectDB from './database/connect.js'
import app from './app.js'



connectDB().then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    })

}).catch((err) => {
    console.log("Error connecting to database", err);
    process.exit(1);
    
})



