from flask import Response
from datetime import datetime
from bson import ObjectId
import json;

class MongoDocumentEncoder(json.JSONEncoder):
    def default(self,o):
        if isinstance(o,datetime):
            return o.isoformat();
        elif isinstance(o,ObjectId):
            return str(o);
        return json.JSONEncoder(self,o);

def jsonify(*args, **kwargs):
    return Response(json.dumps(dict(*args,**kwargs),
                    cls=MongoDocumentEncoder,
                    separators=(",",":"),
                    ensure_ascii=False),
                    mimetype="application/json;charset=utf-8");
