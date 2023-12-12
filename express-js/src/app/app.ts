import express, { NextFunction, Request, Response, response } from 'express'
const app = express()
const port = 3000;

app.use(express.json())
app.use(express.text())

const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter)

userRouter.get("/create-user",
    (req: Request, res: Response) => {
        const user = req.body;
        console.log(user);

        res.json({
            success: true,
            message: "Successful",
            data: user
        });
    });

courseRouter.post("/create-course",
    (req: Request, res: Response) => {
        const course = req.body;
        console.log(course);

        res.json({
            success: true,
            message: "Course added Successfully",
            data: course
        })
    })

const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method, req.hostname);
    next();
}

app.get('/', logger, (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.query);
    // res.send('Express is running');
    try {
        res.send(something);
    } catch (error) {
        // console.log(error);
        // res.status(400).json({
        //     success: false,
        //     message: "Failed to get data"
        //})
        next(error)

    }
})
// app.get('/:uid/:sub_id', (req: Request, res: Response) => {
//     console.log(req.params);
//     res.send('Express is running')
// })

app.post('/', logger, (req: Request, res: Response) => {
    console.log(req.body);
    // res.send('got data')
    res.json({
        "message": "Successfully data sent"
    })
})

// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong"
        })
    }
})

app.all("*", (req: Request, res: Response) => {
    res.status(400).json({
        success: false,
        message: "Not found"
    })
})

export default app;