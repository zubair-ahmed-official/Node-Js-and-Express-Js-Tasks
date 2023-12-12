"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.text());
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
userRouter.get("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "Successful",
        data: user
    });
});
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "Course added Successfully",
        data: course
    });
});
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.get('/', logger, (req, res, next) => {
    // console.log(req.query);
    // res.send('Express is running');
    try {
        res.send(something);
    }
    catch (error) {
        // console.log(error);
        // res.status(400).json({
        //     success: false,
        //     message: "Failed to get data"
        //})
        next(error);
    }
});
// app.get('/:uid/:sub_id', (req: Request, res: Response) => {
//     console.log(req.params);
//     res.send('Express is running')
// })
app.post('/', logger, (req, res) => {
    console.log(req.body);
    // res.send('got data')
    res.json({
        "message": "Successfully data sent"
    });
});
// global error handler
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong"
        });
    }
});
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Not found"
    });
});
exports.default = app;
