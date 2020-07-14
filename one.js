var today = new Date();
        var day = today.getDay();
        var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
        
        var hour = today.getHours();
        var minute = today.getMinutes();
        var second = today.getSeconds();
        var prepand = (hour >= 12) ? " PM " : " AM ";

        
        document.getElementById('today').innerHTML="Today is : " + daylist[day] + ".";
        document.getElementById('time').innerHTML="Current Time : " + hour +  " : " + minute + " : " + second + prepand;