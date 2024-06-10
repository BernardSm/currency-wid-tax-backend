const fs = require('node:fs').promises;

const { DATA_PATH } = process.env

const storeData = (data) => {
    fs.writeFile(DATA_PATH, data, err => {
        if (err) {
            console.error(err);
        } else {
            console.log('Data stored: ' + data)
        }
    });
}

const getData = async () => {
    try {
        const data = await fs.readFile(DATA_PATH, { encoding: 'utf-8' });
        console.log('received data: ' + data);
        return data;
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    storeData,
    getData,
}