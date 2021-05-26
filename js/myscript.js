const url="https://covid19.mathdro.id/api";
const countryUrl="https://covid19.mathdro.id/api/countries/india";

/* 
https://covid19.mathdro.id/api

https://covid19.mathdro.id/api/countries/india
*/
let app=angular.module("MyApp",[])
app.controller("MyCtrl",($scope,$http)=>{
    //this is controller
    $scope.title="Stay home stay safe";
  
    //calling API
    $http.get(url).then((response)=>{
       
      //  console.log(response.data);
        $scope.allData=response.data;
    },(error)=>{
       // console.log('error');
        console.log(error);
    });

    //get country data
    $scope.getCountryData=()=>{
        let c=$scope.country;
        if(c=="")
        {
            $scope.countryData=undefined;
            return;
        }
        else{
            $http.get(`${url}/countries/${c}`).then((response)=>{
               
                $scope.countryData=response.data;

            },
            (error)=>{
                console.log(error);
            });
        }
    }
});