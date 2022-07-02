# React.js Nodejs Mysql starter

React.js Nodejs Mysql starter is a tiny fullstack dev-cli (react.js+nodejs+mysql+docker),
 you can easily build your own app based on this project, free && extendable!!

# Features

- Integration of route, state-manager, request, etc based on react.js-stack.
- A tiny http framework which supports rest-full api style and socket protocol.
- Easy-deploy for docker, which is optional!

# Structure
~~~
starter         Project root dir
├─── _deploy    Docker config and one-step start-up script
├─── backend    Http framework integrated by nodejs
├─── frontend   React.js app
~~~

# Quick start

We had provided a quick start-up guide for each module, that will make you start you project quickly, you have to clone the repository by the command ``git clone`` to your local machine

## backend

- Env Requirement

First all, you must install ```nodejs+npm```, and ```mysql```

- Step

1. Import ```_sql/demo.sql``` into your mysql
2. Run the command ```npm install``` at the root path of the backend
3. ```npm run start```
4. Visit the link ```http://localhost:8200``` by your browser, you can see the text ```hello koa2``` generally

## frontend

- Env Requirement

If you have fellow the step of backend, nothing you need to do

- Step

1. Run the command ```npm install``` at the root path of the frontend
2. ```npm run start```
3. Visit the link ```http://localhost:3000```
4. If you want to run the project over docker, you should make sure you had installed docker in linux subsystem in window10 or linux, run the command ```./sh/startup.sh```

# Api Doc

Api doc online is available now, you can do interface-testing without anything installed

```
LINK: https://www.apifox.cn/apidoc/shared-7b8cb711-2ba6-45e8-a44d-bf3cfb4ecd65  PASSWORD : YunLuEZ5 
```


# Demo online
We had deployed the whole project to the cloud, you can visit the url below

```
http://demo.codingtalk.cn
```

# License
[MIT](http://opensource.org/licenses/MIT)
