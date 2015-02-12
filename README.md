# Simple-Fetch-JSON-Data-by-AngularJS
This is How To Fetch JSON Data by AngularJS simple way

# JSON is really interesting.
[
{
"data1": "value for data1",
"data2": "value for data2"
},
...
]

# Angular Interesting point

     .success(
         function(users)
         {
            // $scope.**people** when change this nothing happen. but data still working.
            // don't know why
            // function(users) the value of $scope must equal then data will appear
            $scope.people = users;
         }
      );
