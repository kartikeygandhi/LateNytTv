											   
												   
												   /*  PRE LOAD IMAGE START    */

setTimeout(function(){

            $('.loader').fadeToggle();

}, 600);

                                                 /*  PRE LOAD IMAGE FINISH    */
												 


                                                  /*  INSTRUCTION SCRIPT START */

var c = 0;
function pop(){

if(c == 0){

document.getElementById("instruction").style.display="block";
c=1;

}  else{

document.getElementById("instruction").style.display="none";
c=0;

   }



}


/*  INSTRUCTION SCRIPT FINISH */



/*  REMOTE SCRIPT START */


function togglemenu(){

document.getElementById('sidebar').classList.toggle('active');

}


/*  REMOTE SCRIPT FINISH */

/*  CLOCK SCRIPT START */

        function showTime() {
		
		var time = new Date();
		var hr = time.getHours();
		var min = time.getMinutes();
		var sec = time.getSeconds();
		var am_pm = "AM";
		
		if(hr > 12)
		{
		   hr-=12;
		   am_pm = "PM";
		
		}
		
		if(hr == 0)
		{
		   hr=12;
		   
		}
		
		hr = (hr<10) ? "0" + hr : hr;
		min = (min<10) ? "0" + min : min;
		sec = ( sec<10) ? "0" + sec : sec;
		
		
		var currentTime = hr + ":" + min + ":"  + sec + " " + am_pm ;
		document.getElementById("clock").innerHTML = currentTime;
		
		setTimeout(showTime , 1000);
		
		}
		
		showTime();

/*  CLOCK SCRIPT FINISH */