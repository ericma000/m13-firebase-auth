// JavaScript authentication file
$(function() {

    // Initialize Firebase
    var config = {
	    apiKey: "AIzaSyCb--95CqV0mInVoaMDRCbtNYlZgoUaT4E",
	    authDomain: "fir-auth-practice.firebaseapp.com",
	    databaseURL: "https://fir-auth-practice.firebaseio.com",
	    storageBucket: "fir-auth-practice.appspot.com",
	    messagingSenderId: "50599200635"
  	};

  	firebase.initializeApp(config);

    // Sign Up: Function to create account on firebase, then redirect to index.html
    var signUp = function() {
        // Get email, password, and display name
        var email = $('#email').val();
        var password = $('#password').val();
        var displayName = $('#display-Name').val();

        // Create user, then set the user's display name
        var auth = firebase.auth();
        auth.createUserWithEmailAndPassword(email, password).then(function(user){
        	user.updateProfile( {
        		displayName: displayName
        	}).then(function() {
        		window.location = 'index.html';
        	})
        }).catch(function(error) {
        	alert(error.message);
        })
                // Set display name

    };

    // SignIn: Function to authenticate on Firebase, then redirect to index.html
    var signIn = function() {
        // Get email and password
        var email = $('#email').val();
        var password = $('#password').val();
        firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
        	window.location = 'index.html';
        }).catch(function(error){
        	alert(error.message);
        })

        // Authenticate using email and password, then redirect

    };

    // Sign out: Function to log a user out of firebase
    var signOut = function() {
        // Sign out, then redirect
        firebase.auth().signOut().then(function() {
        	window.location = 'sign-in.html';
        })


    };

    // Assign event lister to form submission
    $('form').on('submit', function() {
    	event.preventDefault();
    	console.log(this.id);
    	if (this.id == 'sign-up') {
    		signUp();
    	} else if (this.id == 'sign-in') {
    		signIn();		
    	}
    })



    // Assign click event to logout button



    // Authentication Change: see if a user is already signed in, and redirect

            // Rediriect to index.html if there is a user and the pathname isn't '/'

            // Redirect to sign-in if there is NOT a user and the pathname IS '/'

});
