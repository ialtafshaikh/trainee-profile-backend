# employee-profile Backend

Employees profile backend is built using express server, mongoDB atlas is used to store the data and the backend is hosted on Heroku.

## Getting Started

- [Check the frontend app of the employee page](https://github.com/ialtafshaikh/trainee-profile-pages.git)
- [Check the employee profile backend code](https://github.com/ialtafshaikh/trainee-profile-backend.git)

## Features

- Get all employees details.
- Create New employee deatils and store in the mongoDb.
- Get detail of employee by fetching employeeId.

## Additional Features

- hosted on Heroku platform.
- Can upload image (used multer).
- used mongoDb cloud to store employee data.

### Downloading and Running this Project Locally

1. clone the repository

```

https://github.com/ialtafshaikh/trainee-profile-backend.git

```

2. add a `.env` file inside the root folder

```

DATABASE_URL=your_atlas_db_url(keep this empty is ur not provoding any url)
LOCAL_DB_URL=your local mongo url
DEBUG=true // set true to use local db and false to use atlas
PORT=3000

```

Sample for local

```

DATABASE_URL=
LOCAL_DB_URL=mongodb://127.0.0.1:27017/employees
DEBUG=true
PORT=4000

```

### Supported Routes

```

/employees : (method:get) - to get all employee details.
/employees/addEmployee : (method:post) - to add new employee details.
/employees/:id : (method:get) - to get a single data of employee using EmployeeId (Uniquid id)

```

Note:

1. send employee data in this format:

```

{
"firstName":"Sherlock",
"lastName":"Holmes",
"company":"ABC",
"email":"s@gmail.com",
"contact":"1111111111",
"imageUrl":(upload image),
"skills":[],
"altDescription":"I am an employee.",
"hobbies":"Reading",
"socialLinks":{
"gitHub":"",
"linkedIn":"",
"website":""
}

```

## Live Demo of this Project

[hosted backend](https://trainee-profile-backend.herokuapp.com/employees/addEmployee)

## References

- [mongoose quick start](https://mongoosejs.com/docs/index.html)
- [mongoDB documentation reference](https://docs.mongodb.com/manual/introduction/)
- [uniquid to generate unique ids](https://www.npmjs.com/package/uniqid)
- [npm express](https://www.npmjs.com/package/express)
- [axios to make api calls](https://www.npmjs.com/package/axios)
- [CORS module to talk between cross-origin resources](https://www.npmjs.com/package/cors)
- [getting started with docker](https://docs.docker.com/get-started/)
- [middlewares in nodejs](https://medium.com/@selvaganesh93/how-node-js-middleware-works-d8e02a936113)

## Author

- **Altaf Shaikh** - _work by_ - [ialtafshaikh](https://github.com/ialtafshaikh)

- **Saurav Upadhyay** - _work by_ - [isauravupadhyay](https://github.com/sauravraw)

- **Rutuja Patil** - _work by_ - [irutujapatil](https://github.com/Rutuja9696)

- **Sagar Vartak** - _work by_ - [isagarvartak](https://github.com/sagar-vartak)

- **Rishikesh Raut** - _work by_ - [irishikeshraut](https://github.com/Rishikesh46)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

```

```
