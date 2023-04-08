const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

//core node modules
const fs = require("fs");
const path = require("path");
const fsPromises = require("fs").promises;

const logEvents = async () => {
    const dateTime = `${format(new Date(), "MM-dd-yyyy \t hh:mm:ss")}`
    const logItem = `${dateTime} \t ${uuid}`

    try {
        if(!fs.existsSync(path.join(__dirname, "logs"))) {
            await fsPromises.mkdir(path.join(__dirname, "logs"));
        }
        await fsPromises.appendFile(path.join(__dirname, "logs", "eventLogs.txt"), logItem)
    } catch (error){
        console.log(error);
    }
}

module.exports = logEvents;