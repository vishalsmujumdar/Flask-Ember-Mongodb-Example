from flask import Flask
import os

#init
app = Flask(__name__);

#config
app.config.from_object('app.config.'+os.environ.get('ENV','DEV'));
app.debug = app.config.get('DEBUG',False);

#database
db = app.config.get('DB');

@app.route('/')
def init():
    return app.send_static_file('index.html');

def register_blueprints(app) :
    from api.issues.api import issues
    app.register_blueprint(issues)
register_blueprints(app)

if __name__ == '__main__' :
    app.run();
