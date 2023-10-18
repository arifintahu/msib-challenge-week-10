# Challenge Week 10 - Movie Reviewer
In this challenge, we will build a movie reviewer API with modular monolith design pattern. This pattern organizes an application into separate, independently manageable modules, enhancing code reusability and maintainability. 

This project have three modules: `movie`, `review`, and `user` module. Your task is to complete the project based on the challenge objectives.

## Objectives
1. Add `userId` validation by calling `UserService.getUserById`, [TODO](https://github.com/arifintahu/msib-challenge-week-10/blob/31b80dd50e4623dc1e1616811904594c74556423/challenge/src/modules/review/services/review.service.js#L15)
2. Add `movieId` validation by calling `MovieService.getMovieById`, [TODO](https://github.com/arifintahu/msib-challenge-week-10/blob/31b80dd50e4623dc1e1616811904594c74556423/challenge/src/modules/review/services/review.service.js#L17) [TODO](https://github.com/arifintahu/msib-challenge-week-10/blob/31b80dd50e4623dc1e1616811904594c74556423/challenge/src/modules/review/services/review.service.js#L38)
3. Validate review uniqueness, so it can't be written twice for each `userId` and `movieId`, [TODO](https://github.com/arifintahu/msib-challenge-week-10/blob/31b80dd50e4623dc1e1616811904594c74556423/challenge/src/modules/review/services/review.service.js#L19)
4. Include property `movieTitle` on `getMovieReviews` by joining table review and movie using sequelize, [TODO](https://github.com/arifintahu/msib-challenge-week-10/blob/31b80dd50e4623dc1e1616811904594c74556423/challenge/src/modules/review/repositories/review.repository.js#L33)

## Postman Collection
```
https://api.postman.com/collections/23885186-2e9ace31-2178-4aa5-bbe4-230742bd2151?access_key=PMAT-01HD1223JKXT8C8H3KEJ1XMK5C
```

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

## References
- [Modular Monolith: A Primer](https://www.kamilgrzybek.com/blog/posts/modular-monolith-primer)
- [Awesome Modular Monolith](https://awesome-architecture.com/modular-monolith/#articles)
