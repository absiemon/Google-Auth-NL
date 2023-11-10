# Google-Auth-NL

In this project, we have simply useed the passport google Strategy.
Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application.

## Features:
1. #### User Registration.
  > i) **Endpoint**: /auth/signup
> 
> ii) **Method**: POST
> 
> iii) **Description**: Allows users to register with the application by providing a name, email, and password.
> 
> iv) **Validation**: Validates the email format and checks for duplicate email addresses.
2. #### User Login.
> i) **Endpoint**: /auth/signin
> 
> ii) **Method**: POST
>  
> iii) **Description**: Enables users to log in using their registered email and password.
> 
3.  ####  User Profile Retrieval.
> i) **Endpoint**: /auth/me
> 
> ii) **Method**: GET
> 
> iii) **Description**: Retrieves the user profile information based on the provided authentication token.
>
4. ####  Google OAuth2.0 Authentication.
> i) **Endpoint**: /auth/google
> 
> ii) **Method**: GET
> 
> iii) **Description**: Initiates the Google OAuth2.0 authentication process. Redirects the user to Google's authentication page.
>
5. ####  Google OAuth2.0 Callback.
> i) **Endpoint**: /auth/google/callback
>
> ii) **Method**: GET
>
> iii) **Description**: Handles the callback from Google after successful authentication. Stores or retrieves user information from the database.

6. #### Frontend Integration
> i) **Framework**: React.js
> 
> ii) **Authentication**: Integrates with the back-end to provide a seamless user experience for registration, login, and Google authentication.
> 
> iii) **Session Handling**: Manages user sessions and authentication state.
>
## Dependencies Used For Backend

These are the Dependencies used for this project.
```
express
connect-mongo
dotenv
express-session
mongoose
passport
passport-google-oauth20
validator
bcryptjs
```

## Google credentials 
First we have to get Google credentials .
To get credentials go to [Google developer Console](https://console.developers.google.com/) 

>_1)create a new project 
>
>2)Select the project and click credentials and the select OAuth client ID
>
>3)Now Select Web Application in application type. 
>
>4)Input your app name or whatever else you like , in Authorized JavaScript origins add this line`http://localhost:3000 ` and in Authorized redirect URIs field add this line ` http://localhost:8000/auth/google/callback `  and the click to create . 
>
>5)Now copy your *Google client ID* and *Google client secret*_
[Help](https://developers.google.com/adwords/api/docs/guides/authentication)

## Initialization of the Project

Follow these steps to set up and run the project:
1. Create a folder of your desired name.
2. Navigate to the project folder.
   ```bash
   cd projectName
   ```
3. Clone the project repository to your local machine:
   ```bash
   git clone https://github.com/absiemon/Google-Auth-NL.git
   ```
4. Nvigate to sever and Install dependencies using npm
```bash
   cd sever
   npm install
   ```
5. Nvigate to client and Install dependencies using npm
```bash
   cd client
   npm install
   ```
6. Create a database on mongo db altlas.
   
7. Create a env file in sever folder
   ```bash
   MONGO_URL= your mongo url.
   JWT_SECRET = your jwt secret key.
   CLIENT_ID = your google client id
   CLIENT_SECRET_KEY = your google client secret key
   ```
8. Run below command to start the server.
   ```bash
   cd sever
   npm run dev
   ```
9. Run below command to start the client.
   ```bash
   cd client
   npm start
   ```

## License

[MIT](https://choosealicense.com/licenses/mit/)
