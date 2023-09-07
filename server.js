const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello")
})
// Define a route to handle GET requests
app.get('/api', (req, res) => {
    // Get query parameters from the request
    const slackName = req.query.slack_name;
    const track = req.query.track;

    // Get the current day of the week
    const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' });

    // Get the current UTC time with validation
    const now = new Date();
    const utcTime = now.toISOString();

    // Construct the JSON response
    const jsonResponse = {
        slack_name: slackName,
        current_day: currentDay,
        utc_time: utcTime,
        track: track,
        github_file_url: 'https://github.com/urizennnn/',
        github_repo_url: 'https://github.com/username/HNG-stage-1',
        status_code: 200,
    };

    // Send the JSON response
    res.json(jsonResponse);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
