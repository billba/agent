# Install, Build

0. Make sure you have [Node.js](https://nodejs.org) installed
1. Clone or download this repository
2. Inside `index.ts`, update the line below with your bot's endpoint:

    `fetch("https://YOUR_BOT_ENDPOINT/api/agent/1")`
    
    Example: `fetch("http://intermediatorbotsample.azurewebsites.net/api/agent/1")`

3. Inside `index.ts`, update the line below with your bot secret key

    ```js
    iframe.src = 'botchat?s=YOUR_WEBCHAT_SECRET_ID';
    ```
    
    * The bot secret key can be found in your bot's profile in
      [the portal](https://dev.botframework.com/bots)
    * Click on the **Edit** button next to the **Direct Line** channel to locate
      the secret key 
    * If your **Configure Direct Line** page is blank, create a new site by
      clicking **Add new site** and two bot secret keys will be generated for you:

4. Run `npm install` to get the npm packages 

    * You only need to run this command once, unless you add other node packages
      to the project

5. Run `npm run build` to build the app 

    * You need to run this every time you make changes to the code before you
      start the application

6. Run `npm run start` to start the app
7. Go to `http://localhost:8080` to see the Agent UI
