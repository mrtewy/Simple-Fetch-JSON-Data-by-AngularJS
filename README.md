# Simple Fetch JSON Data by AngularJS
*I'm a newbie of this, okay. i knew but i want to learn more.*
**This is How To Fetch JSON Data by AngularJS simple way**

## JSON is really interesting. ##
     [
          {
          "data1": "value for data1",
          "data2": "value for data2"
          },
          ...
     ]

## Confused point on AnguarJS ##

     .success(
         function(users)
         {
            // $scope.**people** when change this nothing happen. but data still working.
            // don't know why
            // function(users) the value of $scope must equal then data will appear
            $scope.people = users;
         }
      );
