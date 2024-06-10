require('dotenv').config()

const schedule = require('node-schedule')

const { storeData } = require('../services/exchangeData')

// At a particular date and time
const { CRON_SCHEDULE_EXPRESSION, EXCHANGE_RATE_API } = process.env

schedule.scheduleJob('usdExchangeRate', CRON_SCHEDULE_EXPRESSION, async () => {
    try {
        const response = await fetch(EXCHANGE_RATE_API, {
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            }
        });
        const data = await response.json();
        console.log(`Data: ${JSON.stringify(data['summary']['price'])}`)
        
        // Process your data as needed
        storeData(data['summary']['price'])
    } catch (error) {
        console.log("Error fetching data: ", error);
    }
    console.log('Scheduler ran')
})
