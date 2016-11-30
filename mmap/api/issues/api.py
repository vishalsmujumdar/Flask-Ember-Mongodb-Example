from flask import Flask, Blueprint, request
from flask.views import MethodView
from app import db
from bson import json_util

issues = Blueprint('issues',__name__);

class IssuesAPI(MethodView):
    issue = {'id':'','title':'','done':'','date':'','user':''};

    def parseJSON(self,item):
        clone = self.issue.copy();
        clone['id'] = str(item['_id'])
        for key in item['issue']:
            clone[key] = item['issue'][key]
        return clone

    def get(self):
        items = [];
        for item in db.issues.find():
            items.append(self.parseJSON(item))
        return json_util.dumps({'issues':items}, default=json_util.default);

    def post(self):
        issue = json_util.loads(request.data.decode('utf-8'))
        db.issues.save(issue);
        return json_util.dumps({'issue':self.parseJSON(issue)});

    @classmethod
    def register(cls,api):
        f=cls.as_view('issues_api')
        api.add_url_rule('/api/issues',view_func=f,methods=['GET']);
        api.add_url_rule('/api/issues',view_func=f,methods=['POST']);
        #api.add_url_rule('/api/issues/<id>',view_func=f,methods=['PUT','DELETE']);
IssuesAPI.register(issues)
