angular.module('starter.controller',['ionic'])

    // SETUPIP
    .controller('setupip',function($state,$scope){


        $scope.setup = function(){
            var ip = document.getElementById('ipadd').value;
            if(ip == ""){
                $scope.errorlabel = 'Please set a server.';
            }else{
                localStorage.setItem('ipadd',ip);
                $state.go('login');
            }
        }
 
    })


    .controller('set', function($scope,$state){
        $scope.set= function(a){
         localStorage.setItem("title",JSON.stringify(a));
         $state.go("app.meal");
        }
    })
	//LOGINNNNNNNNNNNNNNNN
    .controller('login', function ($scope, $http, $state, $ionicHistory ){
    $scope.loginform = function(){
        var username = $scope.username;
        var password = $scope.password;

        console.log(username + " " + password);

        $http.defaults.headers.post['Content-Type'] = 'applicaation/x-www-form-urlencoded; charset=UTF-8';
        $http({
            url: 'https://jrenzo12345671.000webhostapp.com/login.php',
            method: "POST",
            data:{
                'username' : username,
                'password' : password,

            }
        })
        .then(function(response){
            console.log(response.data);
            var data = response.data[0];
            if(data != "Account Doesn't exist!"){
                $scope.username = '';
                $scope.password = '';
                $state.go('app.profile');
                localStorage.setItem("name", data);

            }else{
                $scope.error = data;
                $scope.password = '';
            }
        },
        function(response){
            console.log('Error');
        });

    }
})

//REGISTERRRRRRRRRRRRRRRRRRR

.controller('register', function ($scope, $http, $state, $ionicHistory) {
   $scope.loginform = function (){
    var fullname = $scope.fullname;
    var username = $scope.username;
    var password = $scope.password;
    var email = $scope.email;
    var home_add = $scope.home_add;
    
    $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    $http({
        url: 'https://jrenzo12345671.000webhostapp.com/register.php',
        method: "POST",
        data: {
            'fullname' : fullname,
            'username' : username,
            'password' : password,
            'email' : email,
            'home_add' : home_add
        }
     })
    .then(function(response){
        console.log(response.data);
        var data = response.data;
        $scope.label = data;
        if(data == "Please Wait....."){
            $state.go('app.profile');
            localStorage.setItem("name", username);
        }
        $scope.fullname = '';
        $scope.username = '';
        $scope.password = '';
        $scope.email = '';
        $scope.home_add = '';
     
    },
    function(response){
        console.log('Error');
    });
   }
}) 

////PROFILE
.controller('profile',function($scope, $http){
          done();
function done() {
      setTimeout( function()  {
      updates(); 
      done();
      }, 200);
}
function updates(){

 $http.get('https://jrenzo12345671.000webhostapp.com/one.php')

}
         $scope.getnotif = function(index,data){
            var c = JSON.parse(localStorage.getItem('data'));
  $scope.names= c['fullname'];
    $scope.email = c['email'];
    $scope.home_add = c['home_add'];
     }
    // setInterval(function(){
    //           $http({
    //     url: 'http://'+localStorage.getItem('ipadd')+'/meal_app/include/profile.php',
    //     method: "POST",
    //     data: {
    //         'fullname' : localStorage.getItem('name')
    //     }
    // })

    var a = localStorage.getItem('name');
    $http.get("https://jrenzo12345671.000webhostapp.com/profile.php/"+a)
    .then(function(response){
        console.log(response.data[0]);
        localStorage.setItem('data',JSON.stringify(response.data[0]));
            var data = JSON.parse(localStorage.getItem('userdata'));
        $scope.data = response.data;
          $scope.me = response.data[0];
    

    // },1000);
    },


    function(response){
        console.log('Error');
    });
    // var data = JSON.parse(localStorage.getItem('userdata'));
    // $scope.fullname = data['data'][3]['fullname'];
    // $scope.email = data['data'][0]['email'];
    // $scope.home_add = data['data'][0]['home_add'];        
    // },1000);

})
.controller("meal" , function($scope,$http,$state){

$scope.set_meal = function(){
  done();
}
  
function done() {
      setTimeout( function()  {
      updates(); 
      done();
      }, 200);
}
function updates(){

 $http.get('https://jrenzo12345671.000webhostapp.com/one.php')
            $scope.a = JSON.parse(localStorage.getItem('title'));
}

          $scope.a = JSON.parse(localStorage.getItem('title'));
    $scope.sendreport = function(){
    var a = document.getElementById('time').value;
    var b =document.getElementById("food").value;
    var c =JSON.parse(localStorage.getItem('title'));
    $http.get("https://jrenzo12345671.000webhostapp.com/insert.php?food="+b+"&oras="+a+"&title="+c)
    $state.go("app.set");

}
})
////NOTIFICATION
.controller('notif', function($scope,$http,$state) {
             done();
function done() {
      setTimeout( function()  {
      updates(); 
      done();
      }, 200);
}
function updates(){

 $http.get('https://jrenzo12345671.000webhostapp.com/one.php')

}
    $scope.$on('$ionicView.beforeEnter', function() {
    $http.get("https://jrenzo12345671.000webhostapp.com/select_notif.php")
    .then(function(a){
        console.log(a['data'][0]);
        $scope.notification = a['data'];

        a['data'].forEach( function(element, index) {
            // statements
            console.log(element);
            $scope.theText = element['notif_time']+" "+element['title']+" food "+element['food'];
            console.log($scope.theText);

            TTS
                .speak({
                    text: $scope.theText,
                    locale: 'en-US',
                    rate: 1
                }, function () { console.log('success');
            },
            function (reason) {
            });

        });

    })
    })
    $scope.me = function(a){
    localStorage.setItem("notif" , JSON.stringify(a));
    $state.go("app.message");
    }

      // $scope.remove = function(index){
      //         $scope.notif.splice(index,1)
      //         localStorage.setItem('notif', JSON.stringify($scope.notif));
      //       };
})

// /////EDIT

// .controller('editco', function($scope,$http) {
//  $scope.edit = function(a){
  
//    $http.get('http://'+localStorage.getItem('ipadd')+'/meal_app/include/edit_notif.php?id='+a)
//  .then(function(a){
//   console.log(a.data[0]);
//   document.getElementById('notif_time').value = a.data[0]['notif_time'];
//   document.getElementById('title').value = a.data[0]['title'];
//   document.getElementById('food').value = a.data[0]['food'];
//     document.getElementById('id').value = a.data[0]['id'];

// })
//  $scope.datas = {};
//  $scope.edita = function(){

//   var id= document.getElementById('id').value;
//   var fname= document.getElementById('notif_time').value;
//   var lname = document.getElementById('title').value ;
//   var comments = document.getElementById('food').value;
  
//   $http.post('http://'+localStorage.getItem('ipadd')+'/meal_app/include/edit.php?id='+id+'&notif_time='+notif_time+'&title='+title+'&food='+food)
//  document.getElementById('notif_time').value = '';
//   document.getElementById('title').value = '';
//   document.getElementById('food').value ='';
//     document.getElementById('id').value = '';

//    }

  

//  }
//    done();
// function done() {
//       setTimeout( function()  {
//       updates(); 
//       done();
//       }, 200);
// }
// function updates(){

//  $http.get('http://'+localStorage.getItem('ipadd')+'/meal_app/include/select_notif.php')
//  .then(function(a){
//   console.log(a.data);
//   $scope.comments = a.data;
// })
// };


//// DELETE
.controller('delete', function($scope,$http) {
         done();
function done() {
      setTimeout( function()  {
      updates(); 
      done();
      }, 200);
}
function updates(){

 $http.get('https://jrenzo12345671.000webhostapp.com/one.php')

}
 $scope.$on('$ionicView.beforeEnter', function() {
    $http.get("https://jrenzo12345671.000webhostapp.com/select_notif.php")
    .then(function(a){
        console.log(a['data'][0]);
        $scope.notification = a['data'];

        a['data'].forEach( function(element, index) {
            // statements
            console.log(element);
            $scope.theText = element['notif_time']+" "+element['title']+" food "+element['food'];
            console.log($scope.theText);

            TTS
                .speak({
                    text: $scope.theText,
                    locale: 'en-US',
                    rate: 1
                }, function () { console.log('success');
            },
            function (reason) {
            });

        });

    })
    })


    done();
function done() {
      setTimeout( function()  {
      updates(); 
      done();
      }, 200);
}
function updates(){

 $http.get('https://jrenzo12345671.000webhostapp.com/notificationdelete.php')
 .then(function(a){
  console.log(a.data);
  $scope.notification = a.data;
})
}
$scope.deletedd = function (a){
   $http.get('https://jrenzo12345671.000webhostapp.com/delete.php?id='+a)
}
})
///////
.controller('addreport', function($scope,$http){
    $scope.data={};
    $scope.sendreport = function(){
        var food=$scope.data.food;
        var oras=$scope.notif_time;
        $http.post('https://jrenzo12345671.000webhostapp.com/insert.php?food='+food+'oras='+oras)
        // $http.post('http://'+localStorage.getItem('ipadd')+'/ocabphp/addreport.php?name='+name+'&purok='+purok+'&location='+location+'&type='+type+'&details='+details)
        console.log(food);
        $scope.data={};
    }
})


//////

.controller('menu',function($scope,$http){
                 done();
function done() {
      setTimeout( function()  {
      updates(); 
      done();
      }, 200);
}
function updates(){
    $http.get('https://jrenzo12345671.000webhostapp.com/count.php').then(function(q){
        console.log(q.data[0]['me']);
        $scope.me = q.data[0]['me'];
    })  

}
})
.controller('message', function($scope, $http, $state){
             done();
function done() {
      setTimeout( function()  {
      updates(); 
      done();
      }, 200);
}
function updates(){

 $http.get('https://jrenzo12345671.000webhostapp.com/one.php')

}
    $scope.getnotif = function(index,data){
        var a = JSON.parse(localStorage.getItem("notif"));
        console.log(a);
        $http.get("https://jrenzo12345671.000webhostapp.com/notif.php?id="+a)

        .success(function(data){
            $scope.notif = data;

        console.log(data);
                var a= [];
                var b= [];
                for(var i = 0 ; i < data.length ; i++){
                    var s = data[i];
                    a.push(s); 
                    
                }
                $scope.save = function(index,data){

                    var a = index;
                    console.log(a);
                    localStorage.setItem("index",a);
                }

                for(var i = 0 ; i < data.length ; i++){
                    var l = localStorage.getItem('index');
                    if (i == l){
                    var s = data[i];
                    b.push(s);
                    }
  
                }
                $scope.mynotif= a;
                    console.log(a);
                    $scope.mynotif2= b;
                    console.log(b);

            }); 
        }

    });

