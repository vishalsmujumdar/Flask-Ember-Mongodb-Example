from flask import Flask
import os

#init
APP_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__),'..'));
STATIC_ROOT = os.path.join(APP_ROOT,'static');
app = Flask(__name__,root_path=APP_ROOT,static_folder=STATIC_ROOT, static_url_path='');

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
