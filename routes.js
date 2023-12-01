const express = require('express');
const path = require('path');
const {google} = require('googleapis');
const { rosterMapper } = require('./mappers/rosterMapper');
const { scheduleMapper } = require('./mappers/scheduleMapper');
const router = express.Router();
const apis = google.getSupportedAPIs();


router.get('/api/getRoster', async (req, res) => {
    console.log('requesting roster');

    const sheets = google.sheets({
        version: "v4",
        auth: process.env.GOOGLE_ACCOUNT_API_KEY
    });

    // read rows from spreadsheet
    const getGroup1 = await sheets.spreadsheets.values.get({
        // auth,
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: "Group1!A2:C50"
    });

    const getRaidDetails1 = await sheets.spreadsheets.values.get({
        // auth,
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: "Group1!G2:K2"
    });

    const getBench = await sheets.spreadsheets.values.get({
        // auth,
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: "Bench!A2:B50"
    });


    // add all returned data into one object
    returnData = {
        group1: {
          roster: rosterMapper(getGroup1.data.values),
          schedule: scheduleMapper(getRaidDetails1.data.values[0])
        },
        bench: getBench.data
    };

    res.json(returnData);
});

router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, './client/public/index.html'));
  });

module.exports = router;
