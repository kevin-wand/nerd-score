# nerd-score

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

The common origin for the term "nerd" can be traced back to Dr Seuss. Originally used in 1950 as slander, the term has evolved and reappropriated in modern day culture to designate a high level of intelligence and often times used endearingly.

**Test Your Inner Nerd** is a website designed to provide users the opportunity to take quizzes based on a variety of categories and receive scores based on performance; their rankings enshrined on a leaderboard. With knowledge comes great responsibility, as users who place high enough can add, edit, and delete questions from the database.

<br>

## MVP

### Goals

- Catalog of Quizzes
- Leaderboard and Rankings
- Randomized Questions & Answers
- Option to Choose or Random Quiz
- Create/Edit/Delete ability for Ranked Users

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React          | _Javascript library used to build a responsive user interface._ |
|   React Router   | _Javascript library, used in conjunction with React to designate routes for user navigation._ |
|   Rails          | _Popular framework written in Ruby and based on MVC architecture to facilitate the database and server side response for this web application._ |

<br>

### Client (Front End)

#### Wireframes

- [Link to Figma](https://www.figma.com/file/TN6ySclfGiFFb5EM6fSvbL/Untitled?node-id=0%3A1)

#### Component Tree

- [Link to Whimsical](https://whimsical.com/nerd-score-YCmPXgw5b5kLucKUNqrnBW)

#### Component Architecture

``` structure
src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
|__ containers/
      |__ MainContainer.jsx
      |__ QuizPage.jsx
      |__ Scoreboard.jsx
|__ layouts/
      |__ Layout.jsx
|__ screens/
      |__ Login.jsx
      |__ Register.jsx
      |__ Questions.jsx
      |__ Game.jsx
      |__ QuestionCreate.jsx
      |__ QuestionEdit.jsx
      |__ QuestionDelete.jsx
      |__ Scores.jsx
      |__ UserScores.jsx
|__ services/
      |__ api-config.jsx
      |__ users.jsx
      |__ questions.jsx
      |__ scores.jsx

```

#### Time Estimates

| Task                                 | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------                  | :------: | :------------: | :-----------: | :---------: |
| Planning & Mockup                    |    H     |     3 hrs      |      TBD      |     TBD     |
| Pseudocode                           |    H     |     2 hrs      |      TBD      |     TBD     |
| BE Models & Routes                   |    H     |     3 hrs      |      TBD      |     TBD     |
| BE Controllers                       |    H     |     3 hrs      |      TBD      |     TBD     |
| BE User Auth                         |    H     |     2 hrs      |      TBD      |     TBD     |
| Seed Data                            |    H     |     3 hrs      |      TBD      |     TBD     |
| FE Layout & Containers               |    H     |     3 hrs      |      TBD      |     TBD     |
| FE Routes & Links                    |    H     |     3 hrs      |      TBD      |     TBD     |
| FE CRUD operations                   |    H     |     3 hrs      |      TBD      |     TBD     |
| FE User Auth                         |    H     |     1 hrs      |      TBD      |     TBD     |
| CSS Styling - Home Screen            |    H     |     3 hrs      |      TBD      |     TBD     |
| CSS Styling - Main Quiz Screen       |    H     |     3 hrs      |      TBD      |     TBD     |
| CSS Styling - Game / Question Screen |    H     |     3 hrs      |      TBD      |     TBD     |
| CSS Styling - Login / Registry Screen|    H     |     2 hrs      |      TBD      |     TBD     |
| CSS Styling - Leaderboard Screen     |    H     |     3 hrs      |      TBD      |     TBD     |
| CSS Styling - Question CUD Screen    |    H     |     3 hrs      |      TBD      |     TBD     |
| CSS polished styling                 |    H     |     3 hrs      |      TBD      |     TBD     |
| Total                                |          |     46 hrs     |      TBD      |     TBD     |

<br>

### Server (Back End)

#### ERD Model

- [Link to Draw.io](https://i.imgur.com/IcPkx1S.jpeg)
<br>

***

## Post-MVP

- Leaderboard by category
- Timer on Questions
- Additional CSS Transitions/Animations

***

## Code Showcase

> tbd

## Code Issues & Resolutions

> tbd
