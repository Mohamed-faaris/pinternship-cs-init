import express, { type Request, type Response } from 'express'

const PORT = 3000

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Greenfield Community Center!');
});

app.get('/events', (req: Request, res: Response) => {
    const events = [
        'Yoga Class - Monday 7pm',
        'Gardening Workshop - Wednesday 5pm',
        'Book Club - Friday 6pm'
    ];
    res.json(events);
});

app.get('/contact', (req: Request, res: Response) => {
    const contactInfo = {
        email:"me@faaris.dev",
        phone:"1231231231"
    }
    res.json(contactInfo);
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})