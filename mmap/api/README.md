Api Format
===
For example
-----------
#####from Backend Server
>[
>   {
>      "_id":{
>         "$oid":"583a913010ae920decf66ad1"
>      },
>      "issue":{
>         "title":"test",
>         "user":"guest",
>         "date":"2016-11-27T07:54:18.857Z",
>         "done":false
>      }
>   },
>   {
>      "_id":{
>         "$oid":"583a91c610ae9216b4981560"
>      },
>      "issue":{
>         "title":"test2",
>         "user":"guest",
>         "date":"2016-11-27T07:56:30.687Z",
>         "done":false
>      }
>   }
>]

#####to Frontend Ember App
>{
>  "issues": [{
>    "id": 1,
>    "title": "FIRST"
>  }, {
>    "id": 2,
>    "title": "SECOND"
>  }]
>}
