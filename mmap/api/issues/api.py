from flask import Flask, Blueprint
from flask.views import MethodView
from app import db
from app.jsonify import jsonify

issues = Blueprint('issues',__name__);

class IssuesAPI(MethodView):
    def get(self):
        issues = list(db.issues.find());
        return jsonify({'issues':issues});

    @classmethod
    def register(cls,api):
        f=cls.as_view('issues_api')
        api.add_url_rule('/api/issues',view_func=f,methods=['GET'])
        # issues.add_url_rule(url,view_func=f,methods=['POST'])
        # issues.add_url_rule(url+'<id>',view_func=f,methods=['PUT','DELETE'])
IssuesAPI.register(issues)
