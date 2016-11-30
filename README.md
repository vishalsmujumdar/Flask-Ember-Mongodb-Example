Flask - Ember - Mongodb example
===============================
#(UNMAINTAINED  - last commit at 2016-11-30)

##Prerequisites
1. [python3](https://www.python.org/downloads/)
2. [Ember](http://emberjs.com/)
3. [Git](https://git-scm.com/downloads)
4. [Node](https://nodejs.org/en/)
5. [Bower](https://bower.io/)
6. [PhantomJS](http://phantomjs.org/)
4. [mlab](https://mlab.com/)'s mongodb repository(optional)

##Structure
1. --mmap-- - Python Flask Backend
2. --mmap-web-- - Ember Js Frontend

#Version
-Python     ==  3.5.2
-Flask      ==  0.11
-Pymongo    ==  3.3.1
-Node       ==  4.6.1
-Ember      ==  2.9.1
-Ember Data ==  2.9.0
-Ember-cli  ==  2.9.1

##Command Line
>cd / \n
>git clone https://github.com/woosungchu/mmap.git\n
>cd mmap\n
>python -m venv venv-mmap\n
>(window) venv-mmap/Script/activate.bat\n
>(UNIX) source myvenv/bin/activate\n
>(window) SET DB_DEV=mongodb://user:password@ds012345.mlab.com:12345/heroku_12345   ~~(your mongodob url)~~\n
>(UNIX) export DB_DEV=mongodb://user:password@ds012345.mlab.com:12345/heroku_12345   ~~(your mongodob url)~~\n
>cd mmap\n
>pip install -r requirements.txt\n
>cd ../mmap-web\n
>npm install\n
>bower install\n
>ember build -prod\n
>cd ../mmap\n
>python run.py\n
Go to <http://localhost:5000>!! 

#Sorry for....
1. I didn't write code for put, delete
2. I'll not maintain this project
3. You may find some meaningless comments
