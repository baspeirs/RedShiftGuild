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
        range: "Group1!A2:F50"
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
        groups: [
          {
            group: 'Group 1',
            roster: rosterMapper(getGroup1.data.values),
            schedule: scheduleMapper(getRaidDetails1.data.values[0])
          },
          {
            group: 'Group 2',
            roster: 'recruiting',
            schedule: 'recruiting'
          }
        ],
        bench: getBench.data
    };

    res.json(returnData);
});

router.get('/api/getAdmins', async (req, res) => {
  const admins = [
    {admin: 'Willfeign', role: 'Your Overlord', quote: '"Go on, get!"'},
    {admin: 'Dmontri', role: 'Raid Lead', quote: '"That\'ll be another citation"'},
    {admin: 'Kaosyn', role: 'Guild Bank', quote: '"Ask me about my cars extended warranty"'},
    {admin: 'Jointboi', role: 'Cool Guy', quote: '"Coolest guy in the guild. No freakin contest" - Willfeign'},
  ];

  res.json(admins)
});

router.get('/api/getAccomplishments', async (req, res) => {
    const accomplishements = [
        {
            phase: '1',
            completed: true,
            raids: [
              { raid: 'Magtheridon', completion: '1/1' },
              { raid: 'Gruul and Maulgar', completion: '2/2' },
              { raid: 'Karazhan', completion: '11/11' }
            ]
          },
          {
            phase: '2',
            completed: true,
            raids: [
              { raid: 'Serpentshrine Cavern', completion: '6/6' },
              { raid: 'Tempest Keep', completion: '4/4' }
            ]
          },
          {
            phase: '3',
            completed: true,
            raids: [
              { raid: 'Mount Hyjal', completion: '5/5' },
              { raid: 'Black Temple', completion: '11/11' }
            ]
          },
    ]
    res.json(accomplishements)
});

router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, './client/public/index.html'));
  });

module.exports = router;
