Flask - Ember - Mongodb example
===============================
##Prerequisites
1. [python3](https://www.python.org/downloads/)
2. [Ember](http://emberjs.com/)
3. [Git](https://git-scm.com/downloads)
4. [Node](https://nodejs.org/en/)
5. [Bower](https://bower.io/)
6. [PhantomJS](http://phantomjs.org/)
4. [mlab](https://mlab.com/)'s mongodb repository(optional)

##Structure
1. ***mmap*** - Python Flask Backend
2. ***mmap-web*** - Ember Js Frontend

#Version
-Python     ==  3.5.2__
-Flask      ==  0.11__
-Pymongo    ==  3.3.1__
-Node       ==  4.6.1__
-Ember      ==  2.9.1__
-Ember Data ==  2.9.0__
-Ember-cli  ==  2.9.1__

##Command Line
>cd__
>git clone https://github.com/woosungchu/mmap.git__
>cd mmap__
>python -m venv venv-mmap__
>(window) venv-mmap/Script/activate.bat__
>(UNIX) source myvenv/bin/activate__
>(window) SET DB_DEV=mongodb://user:password@ds012345.mlab.com:12345/heroku_12345   ~~(your mongodob url)~~__
>(UNIX) export DB_DEV=mongodb://user:password@ds012345.mlab.com:12345/heroku_12345   ~~(your mongodob url)~~__
>cd mmap__
>pip install -r requirements.txt__
>cd ../mmap-web__
>npm install__
>bower install__
>ember build -prod__
>cd ../mmap__
>python run.py__
Go to <http://localhost:5000>!!__

#Sorry for....
1. I didn't write code for put, delete
2. I'll not maintain this project
3. You may find some meaningless comments
