# 🧑‍💻Chapter Engineering Candidate Project

Congrats on making it to the project stage of Chapter's hiring process! With this project, we'd like to see how well you can build a modern, full stack application.

## The Basics

You're tasked with building a simple website that allows users to search Medicare plans.

Don't spend more than 4 hours on this project.

Remember - you're building an MVP, so prioritize functionality over performance. Worry less about performance and more about building a complete, functional web app.

## Important Terms

- Bid ID: A unique identifier for Medicare Advantage plans. Of the following two forms:
  - "Hxxxx-xxx-xxx", where all digits are required (e.g. "H1234-007-003")
  - "Hxxxx-xxx-y", where the final "y" group has no trailing zeroes (e.g. "H1234_007_3")

## Included Files

We've included a single data file to base the plan search off of.

- `medicare_plans.txt` - Contains basic information about Medicare plans.

## Getting Started

You're free to use whatever libraries, packages, of frameworks you like. We're less interested in which technologies you're familiar with than how you utilize them. Some popular ones that Chapter engineers like include:

- [Meteor.js](https://www.meteor.com/) with [React](https://guide.meteor.com/react.html)
- [Next.js](https://nextjs.org/)
- [Create React App](https://create-react-app.dev/)

Once you've made your tech selection, your web app should have the following capabilities:

- Take as input a Bid ID
- Search the provided list of plans for the relevant entry
- Display the following information:
  - Insurance carrier
  - Plan name
  - Geographic area served by this plan
  - The link to the plan's pharmacy website

If you get stuck, don't hesitate to reach out to darshan@getchapter.com or adam@getchapter.com with questions. Good luck!
