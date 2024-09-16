import express from 'express';

const app = express();

//Creating a server
app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id:1,
            content: 'What is fast, loud and crunchy? A rocket chip.'
        },
        {
            id:2,
            content: 'How does the ocean say hi? It waves!'
        },
        {
            id:3,
            content: 'What has ears but cannot hear? A cornfield.'
        },
        {
            id:4,
            content: 'Why do birds fly south in the winter? It’s faster than walking!'
        },
        {
            id:5,
            content: 'What did the lava say to his girlfriend? “I lava you!”'
        },
        {
            id:6,
            content: 'Which superhero hits home runs? Batman!'
        },
        {
            id:7,
            content: 'What’s Thanos’ favorite app on his phone? Snapchat.'
        },
        {
            id:8,
            content: 'What is a room with no walls? A mushroom.'
        },
        {
            id:9,
            content: 'What social events do spiders love to attend? Webbings.'
        },
        {
            id:10,
            content: 'What’s brown and sticky? A stick.'
        }
    ]
    res.send(jokes);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Serve at http://localhost:${port}');
});

