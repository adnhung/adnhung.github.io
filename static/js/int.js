var passphrase,administrator,gitMaster,userMail,userid,gitConector,error,gh,gist,ghRepo,ghUser;
var ghUsername= 'WgCDy7UW9V8MdVMoMV3p';
var ghReponame=	'ZQHkuywa9V/of203iU2NgWGBFC0tkmpuFQ==';
var ghMaPath='reaction/';
//_________________________________________________________________________________________

   function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
    if (response.status === 'connected') {   // Logged into your webpage and Facebook.
      testAPI();  
    } else {                                 // Not logged into your webpage or we are unable to tell.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this webpage.';
    }
  }
  function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me',{fields: 'name, email,id'}, function(response) {
     	userMail=response.email;
     	userid=response.id;
      	document.querySelector('.fb-login-button').style.display='none';
        adNhung.load();
    });
  }
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '4526630724076934',
      cookie     : true,               
      xfbml      : true,                   
      status     : true,
      scope		 : "public_profile,email",
      version    : 'v9.0'       
    });


    FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
      statusChangeCallback(response);        // Returns the login status.
    });
  };

   function checkLoginState() {   
    FB.getLoginStatus(function(response) {   
      statusChangeCallback(response);
    });
  }

//_________________________________________________________________________________________

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
function dateDiffInDays(a, b) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
const dateOne = new Date("2018-05-29"),
    dateSecond = new Date(yyyy+"-"+mm+"-"+dd),
    betwten = dateDiffInDays(dateOne,dateSecond);

//_________________________________________________________________________________________
function particlesJSchange(){
particlesJS("particle-ground",{particles:{number:{value:30,density:{enable:!0,value_area:800}},color:{value:["#FF3030","#FF3040"]},shape:{type:["circle"],stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.9,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:18,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:500,color:"#ffffff",opacity:.4,width:2},move:{enable:!0,speed:.5,
direction:"top",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:.5}},bubble:{distance:400,size:16,duration:.7,opacity:1,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:1},remove:{particles_nb:2}}},retina_detect:!0});
var style=document.createElement('style')
style.id="cxxxxx"
style.innerHTML=".hero-static-image:before{background-color: #000000cf;}    #clickto2,.count-down-section{background-color: #ccf99675;}";
document.head.appendChild(style);
}
//_________________________________________________________________________________________

	var adNhung={
		load: function(){
			$.getJSON("//adnhung.github.io/database/config.json", function(xjson) {
				console.log(xjson);
				 passphrase = xjson.passphrase;
				 loadServer();
				 		if(sha256(sha256(userMail)+passphrase)===xjson.administrator[0]){administrator = xjson.administrator[0];gitMaster =xjson.github.master_a;}
				 		if(sha256(sha256(userMail)+passphrase)===xjson.administrator[1]){administrator = xjson.administrator[1];gitMaster=xjson.github.master_b;}
				 try{gitConector=	hdecrypt(hdecrypt(gitMaster,userid),userMail);error= /^[a-zA-Z0-9]+$/g.test(gitConector)?false:true;} catch(e){error=true; }
				 			
 				if(error===false){
				 ghMaPath='feed/';
				 document.querySelector('.fa.fa-heart').style.color='rgb(228, 50, 50)';
				 particlesJSchange();
				 gh = new GitHub({username:hdecrypt(ghUsername,passphrase),token:gitConector});
				 ghUser = gh.getUser();
				 ghRepo=gh.getRepo(hdecrypt(ghUsername,passphrase), hdecrypt(ghReponame,passphrase));
				}

			})
		},
		readDB: async function(path){
			const result = new Promise((resolve) => {
				ghRepo.getContents('main', 'database/'+ghMaPath+path, 'raw').then(function(data) {
						return resolve(hdecrypt(data.data,passphrase));
					}).catch((err) => { return resolve(404); })
			});
			var kq = await result;
				return kq;	
	},
	listFeed: async function(){
			const result = new Promise((resolve) => {
				ghRepo.getContents('main', 'database/'+ghMaPath, false).then(function(data) {
					var vnr=[];
						for (var i=0; i < data.data.length; i++) {
							vnr[i]=data.data[i]['name'];
						};
					
						return resolve(vnr);
					}).catch((err) => { return resolve(404); })
			});
			var kq = await result;
				return kq;	
	},
	importDB: async function(location,content){
			var timestamps=Math.round(new Date().getTime()/1000);
			const result = new Promise((resolve) => {
				ghRepo.writeFile('main', 'database/'+ghMaPath+timestamps, hencrypt(content,passphrase), 'update log file','').then(function(data) {
						return resolve(data.status);
					}).catch((err) => { return resolve(404); })
			});
			var kq = await result;
				return kq;	
	},
	delDB: async function(location){
			const result = new Promise((resolve) => {
				ghRepo.deleteFile('main', 'database/'+ghMaPath+location).then(function(data) {
						return resolve(data.status);
					}).catch((err) => { return resolve(404); })
			});
			var kq = await result;
				return kq;	
	},

}


//_________________________________________________________________________________________

		function loadServer(){
		//	return false;
			fetch('//adnhung.github.io/database/string.json', {method: 'get'}).then(res=>res.text()).then(data =>{
				var db = hdecrypt(data,passphrase);
				var de = JSON.parse(db);
				document.querySelector('.hero-static-image.parallax').style.backgroundImage="url("+de.A.BACKGROUND+")";
				document.querySelector('.hero-static-image.parallax').setAttribute('data-bg-image',de.A.BACKGROUND);
				document.querySelectorAll('.hero-circle h2 span')[0].innerText=de.A.MAN;
				document.querySelectorAll('.hero-circle h2 span')[2].innerText=de.A.GIRL;
				document.querySelector('.hero-circle p.fadeInUp').innerText=de.A.DESTE;
				document.querySelector('.container h2').innerText=de.WE;
				document.querySelector('#textblockA').innerHTML=de.WE_STR_1;
				document.querySelector('center h3').innerText=de.SUNSHINE;
				document.querySelector('.container p strong').innerText=de.SUNSHINE_STR_1;
				document.querySelector('.container h2.big').innerText=de.AND;
				document.querySelector('.container h2.big').innerText=de.AND;
				document.querySelector('.countdown-col .row div p').innerText=de.AND_STR_1;
				document.querySelector('.story-section .section-title-three h2').innerText=de.BEGIN;
				document.querySelector('.story-section .story-tab .tab-pad h3 strong').innerText=de.TOGETHER;
				document.querySelector('.story-section .story-tab .tab-pad p.date strong').innerText=de.BEGIN_DATE;
				document.querySelector('.story-section .story-tab .tab-pad .details h4').innerText=de.BEGIN_TITLE;
				document.querySelector('.story-section .story-tab .tab-pad .details p').innerText=de.BEGIN_STR;
				document.querySelectorAll('.tablinks ul li img')[0].src=de.BEGIN_THUMB[0];
				document.querySelectorAll('.tablinks ul li img')[1].src=de.BEGIN_THUMB[1];
				document.querySelectorAll('.tablinks ul li img')[2].src=de.BEGIN_THUMB[2];
				document.querySelectorAll('.tablinks ul li img')[3].src=de.BEGIN_THUMB[3];
				document.querySelector('#tab-2 .img-holder img').src=de.BEGIN_IMG[0];
				document.querySelector('#tab-1 .img-holder img').src=de.BEGIN_IMG[1];
				document.querySelector('#tab-3 .img-holder img').src=de.BEGIN_IMG[2];
				document.querySelector('#tab-4 .img-holder img').src=de.BEGIN_IMG[3];
				
				var selectorA= document.querySelectorAll('.project-two div div .second-raw-pad .project-thumb-two .project-overlay-two .srvc-ovrly-icon-two a');
				var selectorIMG = document.querySelectorAll('.project-two div div .second-raw-pad .project-thumb-two img.img-responsive');
				var selectorTITLE = document.querySelectorAll('.project-two div div .second-raw-pad .project-thumb-two .srvc-ovrly-text-two h3.text-thm-two');
				var selectorP = document.querySelectorAll('.project-two div div .second-raw-pad .project-thumb-two .srvc-ovrly-text-two p.et-repair-two');
				for (var i=0; i < de.TIMELINE_IMG.length; i++) {
					selectorA[i].href=de.TIMELINE_IMG[i].URL;
					selectorIMG[i].src=de.TIMELINE_IMG[i].URL;
					selectorTITLE[i].innerText=de.TIMELINE_IMG[i].TITLE;
					selectorP[i].innerText=de.TIMELINE_IMG[i].ALT;
				};
				
				
			});

		}
//_________________________________________________________________________________________

document.addEventListener("DOMContentLoaded", function(event) { 
var downArrow = document.getElementById("btn1");
var upArrow = document.getElementById("btn2");

downArrow.onclick = function () {
    'use strict';
    document.getElementById("first-list").style = "top:-620px";
    document.getElementById("second-list").style = "top:-620px";
    downArrow.style = "display:none";
    upArrow.style = "display:block";
};

upArrow.onclick = function () {
    'use strict';
    document.getElementById("first-list").style = "top:0";
    document.getElementById("second-list").style = "top:80px";
    upArrow.style = "display:none";
    downArrow.style = "display:block";
};
})
//_________________________________________________________________________________________
