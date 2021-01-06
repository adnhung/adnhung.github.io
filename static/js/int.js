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


	var adNhung={
		load: function(){
			$.getJSON("//adnhung.github.io/database/config.json", function(xjson) {
				console.log(xjson);
				 passphrase = xjson.passphrase;
				 		if(sha256(sha256(userMail)+passphrase)===xjson.administrator[0]){administrator = xjson.administrator[0];gitMaster =xjson.github.master_a;}
				 		if(sha256(sha256(userMail)+passphrase)===xjson.administrator[1]){administrator = xjson.administrator[1];gitMaster=xjson.github.master_b;}
				 try{gitConector=	hdecrypt(hdecrypt(gitMaster,userid),userMail);error= /^[a-zA-Z0-9]+$/g.test(gitConector)?false:true;} catch(e){error=true; }
 				if(error===false){
				 ghMaPath='feed/';
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


