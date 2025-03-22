import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieSession from 'cookie-session';
import passport from 'passport';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});


const app = express();

app.use(
    cookieSession({
        name:"session",
        keys:["LocalEventFinder"],
        maxAge: 24 * 60 * 60 * 100,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());



app.listen(3001, () => {
    console.log('Server listening on port 3001');
});

app.use('/api/user', userRoutes);
app.use("/api/auth", authRoutes);



app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error!';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
})
