const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello")
    // res.redirect('/api')
})
app.get('/api', (req, res) => {
    const slackName = req.query.slack_name;
    const track = req.query.track;

    const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' });

    // const now = new Date();
    const date = new Date();


    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

    // console.log(formattedDate);

    const utcTime = formattedDate

    const jsonResponse = {
        slack_name: slackName,
        current_day: currentDay,
        utc_time: utcTime,
        track: track,
        github_file_url: 'https://github.com/urizennnn/HNG-stage-1',
        github_repo_url: 'https://github.com/urizennnn/HNG-stage-1',
        status_code: Number(200),
    };

    res.json(jsonResponse);
});


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
