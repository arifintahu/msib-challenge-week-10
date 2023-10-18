# Challenge Week 10 - Modular Monolith - Movie Reviewer
In this challenge, we will build a movie reviewer APi with modular monolith design pattern. This pattern organizes an application into separate, independently manageable modules, enhancing code reusability and maintainability. 

This project have three modules: movie, review, and user module. Your task is to complete the project based on the challenge objectives.

## Objectives
1. Add userId validation by calling UserService.getUserById
2. Add movieId validation by calling MovieService.getMovieById
3. Validate review uniqueness, so it can't be written twice for each userId and movieId
4. Include property movieTitle on getMovieReviews by joining table review and movie using sequelize

## How to Submit

1. Fork this [repository](https://github.com/arifintahu/msib-challenge-week-10)
2. Clone forked repository
3. Create a new branch: `git checkout -b solution`
4. Install dependencies: `npm install`
5. Create a folder of your nickname: `mkdir nickname`
6. Copy files from the `challenge` directory to your own folder
7. Copy `.env.example` to `.env`
8. Complete the objectives
9. Run your server using `node yourfolder/src/index.js`
10. Commit and push your changes
11. Create a Pull Request to original repository
