[![codecov](https://codecov.io/gh/alisonfarrar/treegen-group5/branch/master/graph/badge.svg?token=6OMTXWC9HZ)](https://codecov.io/gh/alisonfarrar/treegen-group5/branch/master)
[![BCH compliance](https://bettercodehub.com/edge/badge/alisonfarrar/treegen-group5?branch=master)](https://bettercodehub.com/)
[![CircleCI Build Status](https://circleci.com/gh/alisonfarrar/treegen-group5.svg?style=shield)](https://app.circleci.com/pipelines/github/alisonfarrar/treegen-group5)

# TreeGen
>TreeGen invites you into the wonderful world of fractal trees. Have a play around, and maybe learn a little bit about set theory and plant development!

This is the public repository for TreeGen, a static web app built in [Vue.js](https://vuejs.org/v2/guide/) and created with [Nuxt.js](https://nuxtjs.org/guides/features/nuxt-components). It features: 
* Multiple preset trees showing you the diversity of fractal trees!
* The option to modify the axiom, productions, and other parameters that generate each tree!
* Cool info about the grammar of fractals and the theory behind L-Systems!

[Check it out here!](https://alisonfarrar.github.io/treegen-group5/)

# Contributor Guide
Thank you for joining us to work on this project! We hope that here you will find useful information to help you get started. If you think of anything that should be added, feel free to create an issue and propose the change. For more information on the tools we used, please check out our [project wiki](https://github.com/alisonfarrar/treegen-group5/wiki/Overview) which contains links to many useful pages.

## Virtual Environment
`npm install` will install the required JavaScript modules into your development environment. You may need to run `npm install` again on subsequent pulls should the dependencies in package.json to be updated.

## Build Setup
To run the web application on your local machine for development purposes, navigate to the root directory of the application. Then use npm to install dependencies stored in the package.json file and run the web app on a local test server:
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```
When the web app is ready, deploy with:
```bash
# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
The web app is deployed automatically as part of continuous integration workflow, so there shouldn't be any need for you to do this manually.

## Workflow 
Pick an issue to work on and assign yourself to that issue. 

Check out a new branch by typing in the console
```bash
git checkout -b <branch name>
```
Replace the contents of <> with your chosen branch name. It should include the number of the issue you've chosen to work on, as well as a short description of the issue in a few words. 

After making your improvements, run `git diff` in the console to satisfy yourself that you haven't changed anything other than what you intended to. Add and commit any changed files with an informative commit message beginning with a reference to the issue number:
```bash
git add <filename1> <filename2> <...>
git commit -m "#<issue number> <description of changes>"
```
Then you can push those changes to your branch:
```bash
git push origin <branch name>
```
The console will print out a link which you can follow to create a pull request. Another contributor will then review your changes and merge them into the master branch, or ask you to make some more changes before merging. 

If you are working on a branch for long periods of time, it can be a good idea to regularly merge the master branch into your branch so you stay up to date with the changes others have made in the meantime. To do this, type in the console:
```bash
git pull
git merge origin/master
```

If Git finds any conflicts that it can't sort out automatically, it will helpfully mark these for you. Open the file that git complains about (e.g. `CONFLICT (content): Merge conflict in <filename>`), find the conflicting lines, and resolve the conflict in whatever way you see fit. Make sure to remove the many flags that Git has added to point you towards the conflict!
You can then add and commit the resolved file and push to your branch as described above, and keep working in your branch!

If the changes you have made require new packages, you should add these to the `package.json` file in the section titled dependencies. For our project, it looks something like this:
```javascript
  "dependencies": {
    "core-js": "^3.6.5",
    "eslint": "^7.12.0",
    "lindenmayer": "^1.5.4",
    "gh-pages": "^3.1.0",
    "nuxt": "^2.14.5"
  },
```

## Continuous Integration and testing
Our automatic testing workflow is handled by CircleCI and can be edited in `config.yml`. It checks code coverage using [CodeCov](https://codecov.io), runs our test suite, and deploys the web app to GitHub Pages. 

## Browser compatibility
TreeGen is built on the Vuetify framework and is compatible with most common browsers including Chrome, Firefox, Safari 10+ and Edge. If you come across any problems using TreeGen on one of these browsers, please flag this up by creating an issue and labelling it "bug". Please include your browser version, your hardware and operating system version, and the steps needed to reproduce the problem, if applicable.   

## Style guide
### Code formatting and linting
We recommend using the [Prettier](https://prettier.io/docs/en/index.html) code formatter. This reprints your code so that it looks cleaner, takes care of linting, and enforces a consistent style across the development team. To enable linting with Prettier in Visual Studio Code, first install the Prettier extension by searching for "Prettier - Code formatter" in the extensions tab. 

### Naming conventions
Keep object names short and descriptive. Avoid using protected words as names, since this will prevent your code from being interpreted correctly.

### Documentation
We are very happy for you to contribute to all areas of our web application, but where you add to the code please make sure that you clearly document your changes using comments. This will help us to understand the reasoning behind your changes and lead to pull requests being accepted more quickly. This might include:

* a succinct description of the main functionality of an object (if adding an object),
* a list of inputs with a brief description and the type of each parameter along with any defaults, and
* a list of any expected outputs, again with types and short descriptions.
