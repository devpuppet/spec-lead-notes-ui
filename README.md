# SpecLeadNotesUi
This project is an Angular exercise project serving an additional purpose of potentially useful application to track 1 on 1 meeting agreements in your organisation.

Information entered in the system are intended to be reviewed by Specialization Lead (SL) **only**.

## How To Run
Project can be run in `development` mode on your `localhost` or in Firebase in production mode.

### Localhost
Run `npm start` to build and run the application in `development` mode. API calls will be sent against back-end server running on `localhost` also.

### Firebase
Run `npm run deploy` to build and depploy the application in `production` mode on [Firebase server](https://spec-lead-notes.web.app/). API calls will be sent against back-end server running on [Render](https://spec-lead-notes-be.onrender.com)

You can also test your application before deploying to firebase with local firebase deploy by running `npm run deploy:local`