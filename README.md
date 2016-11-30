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
- Python     ==  3.5.2
- Flask      ==  0.11
- Pymongo    ==  3.3.1
- Node       ==  4.6.1
- Ember      ==  2.9.1
- Ember Data ==  2.9.0
- Ember-cli  ==  2.9.1

##Command Line
    cd
    git clone https://github.com/woosungchu/Flask-Ember-Mongodb-Example.git
    cd Flask-Ember-Mongodb-Example
    python -m venv venv-mmap
    (window) venv-mmap/Script/activate.bat
    (UNIX) source myvenv/bin/activate
    (window) SET DB_DEV=mongodb://user:password@ds012345.mlab.com:12345/heroku_12345   ~~(your mongodob url)~~
    (UNIX) export DB_DEV=mongodb://user:password@ds012345.mlab.com:12345/heroku_12345   ~~(your mongodob url)~~
    cd mmap
    pip install -r requirements.txt
    cd ../mmap-web
    npm install
    bower install
    ember build -prod
    cd ../mmap
    python run.py
Go to <http://localhost:5000>!!

#Sorry for....
1. I didn't write code for put, delete
2. I'll not maintain this project
3. You may find some meaningless comments
