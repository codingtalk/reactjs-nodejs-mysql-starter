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
├─── _sql       Sql file
├─── backend    Http framework integrated by nodejs
├─── frontend   React.js app
~~~

# Deploy framework

![alt](https://gitee.com/running-cat/reactjs-nodejs-mysql-starter/raw/master/frontend/public/deploy-framework.png)

# Quick start

We had provided a quick start-up guide for each module, that will make you start you project quickly, you have to clone the repository by the command ``git clone`` to your local machine

## Backend

- Env Requirement

First all, you must install [nodejs+npm](https://nodejs.org/en/), and [mysql](https://www.mysql.com/),
If you want to run the project over [docker](https://www.docker.com/), you should make sure you had installed docker over linux subsystem in window10 or linux, run the command ```./sh/startup.sh```

- Install docker(optional)

Run the follow commands below over linux (Centos8 example)

```
1. yum install -y yum-utils device-mapper-persistent-data lvm2
2. yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
3. yum install docker-ce
4. systemctl enable docker
5. curl -L https://github.com/docker/compose/releases/download/1.26.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
6. chmod +x /usr/local/bin/docker-compose
7. docker-compose version
```

- Step

1. Import ```_sql/demo.sql``` into your mysql
2. Run the command ```npm install``` at the root path of the backend
3. ```npm run start```
4. Visit the link ```http://localhost:8200``` by your browser, you can see the text ```hello koa2``` generally

## Frontend

- Env Requirement

If you have fellow the step of backend, nothing you need to do

- Step

1. Run the command ```npm install``` at the root path of the frontend
2. ```npm run start```
3. Visit the link ```http://localhost:3000```

# Api Doc

Api doc online is available now, you can do interface-testing without anything installed

- [Apifox link](https://www.apifox.cn/apidoc/shared-7b8cb711-2ba6-45e8-a44d-bf3cfb4ecd65)  password : YunLuEZ5 


# Demo online
We had deployed the whole project to the cloud, you can visit the url below

```
http://demo.codingtalk.cn
```

# License
[MIT](http://opensource.org/licenses/MIT)
