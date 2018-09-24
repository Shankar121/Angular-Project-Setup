accordApp.service('srvShareData', function ($window) {
    var KEY = 'App.SelectedValue';

    var addData = function (newObj) {
        var mydata = $window.sessionStorage.getItem(KEY);
        // Obj data = $window.sessionStorage.getItem(KEY);
        if (mydata) {
            mydata = JSON.parse(mydata);
        } else {
            mydata = [];
        }
        mydata = newObj;

        $window.sessionStorage.setItem(KEY, JSON.stringify(mydata));
    };
 
    
    var getData = function () {
        var mydata = $window.sessionStorage.getItem(KEY);
        if (mydata) {

            mydata = JSON.parse(mydata);

        }
        return mydata || "N/A";
    };
   
    return {
        addData: addData,
        getData: getData
       
    };
});
