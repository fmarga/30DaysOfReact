/*  
    What is a module?
    it's a single or multiple functions than can be exported and imported when needed, and can be included in a project. 


    What is package?
    it's a collection of modules, 'React' and 'ReactDOM' are some packages of modules that are essential to any React app.


    What is the difference between a module and a package?
    a package can be a collection of modules


    What is NPM?
    it's Node Package Manager, the NodeJs's default package manager. It allows users to consume and distribute JavaScript modules that are available in the registry. NPM allows to create, use and distribute packages.


    What is Webpack?
    Webpack is a static module bundler for JavaScript applications — it takes all the code from your application and makes it usable in a web browser. Webpack goes through your package and creates what it calls a dependency graph which consists of various modules which your webapp would require to function as expected. Then, depending on this graph, it creates a new package which consists of the very bare minimum number of files required, often just a single bundle.js file which can be plugged in to the html file easily and used for the application.


    How do you create a new React project?
    You can create manually, using npm init or you can use the webpack create-react-app, the first one you will need to set every file and every module to the project, the second one come to your project almost done


    What are the files and folders inside a project folder(package.json, package-lock.json or yarn.lock, .gitignore,node_modules and public)?
        node_modules - stores all the necessary node packages of the React applications.

        Public

        index.html - the only HTML file we have in the entire application

        favicon.ico - an icon file

        manifest.json - is used to make the application a progressive web app

        other images - open graph images(open graph images are images which are visible when a link share on social media)

        robots.txt - information, if the website allows web scraping

        src

        App.css, index.css - are different CSS files
        index.js - a file which allows to connect all the components with index.html
        App.js - A file where we usually import most of the presentational components
        serviceWorker.js: is used to add progressive web app features
        setupTests.js - to write testing cases
        package.json- List of packages the applications uses

        .gitignore - React boilerplate comes with git initiated, and the .gitingore allows files and folders not to be pushed to GitHub

        README.md - Markdown file to write documentation

        yarn.lock or package-lock.json - a means to lock the version of the package

*/
