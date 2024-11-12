
import dotenv from 'dotenv'
dotenv.config()
import app from "./app.js";


const port = process.env.NODE_ENV === 'test' ? process.env.TEST_PORT : process.env.PORT || 3100;


app.listen(port, () => {
    console.log(`Server running on port ${port} in ${process.env.NODE_ENV} mode`);
    });