# Feedback Form

### Description

**Feedback Form** is a multi-part form that allows users to leave feedback for a day. 
There will be 4 views for the form parts.
The parts:
- How are you feeling today?
- How well are you understanding the content?
- How well are you being supported?
- Any comments you want to leave?

From the **Home** page, you can start a new feedback entry. 

Once you've submitted the feedback for each page, you are able to progress
to the next page. Also, you are able to view your feedback as you progress.

Once you're finished with the 4 parts, you can review your feedback for a final change to edit or submit. Once submitted, you can start a new feedbac, entry if you wish. 

To view all feedback entries, click the **Log In** button in the header. 
The login form isn't completely functional. It will accept **ANYTHING** in the username and password fields. 

**THERE IS NO SECURITY IN THIS FORM**

# DO NOT ENTER SENSITIVE INFORMATION IN THESE FIELDS

Click **Log In** and it will redirect you to the admin view to all of the feedback entries. 

Clicking **Logout** will disable the admin view and redirect you to the home page. 

## SETUP

Install all dependencies for the project.

```
npm install
```

Start the server.

```
npm run server
```

Now that the server is running, start the react client side app.

```
npm run client
```

For full functionality, you will need to create a local database and tables using the provided `data.sql` file. 

Project can also be found running on Heroku at

```
https://caesar-feedback-form.herokuapp.com/
```

## Authors:

Prime Academy - Base application and server file setup

Kyle Henderson - Frontend UI, server routing, and database queries
