# Welcome to Shakespeare's Reviews

You should have been provided with a `.env` file. You will need to place that in the root directory of this project before spinning it up.

## Known bug:
Fay Lemke's review comes with a punctuation error in the body from the API. A preferred engineering practice would be to talk to maintainers of the API about fixing the error rather than fix it on the front end. 

## Things I'd do differently in a production-ready app:
- Avatar images would be part of the API and passed around with the review object to ensure consistency over the current random selection.
- 'X' button would an icon instead of the letter.
- Wouldn't make 2nd call to the API when all the data is available in the array of reviews. I did this here to illustrate an ability to make multiple API calls.

## Thoughts on next steps:
- Add ability to sort reviews by date or rating.
- Add average rating and ability to filter reviews by number of stars.
- Add ability to leave a review.

## Useful Scripts

In the project directory, you can run:

### `npm i`

Installs recquired packages.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.


