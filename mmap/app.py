from flask import Flask
import os

#init
app = Flask(__name__, static_url_path='');

#config
ENV = os.environ.get('ENV','DEV');
app.config.from_object('config.'+ENV);
app.debug = app.config.get('DEBUG',False);

#database
db = app.config.get('DB');

@app.route('/')
def init():
    return app.send_static_file('index.html');

if __name__ == '__main__' :
    app.run();
