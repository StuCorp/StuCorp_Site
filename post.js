let Post = function(params){
this.user_name = params.user_name; 
this.user_email = params.user_email;
this.user_password = params.user_password;
this.user_age = params.user_age; 
this.user_bio = params.user_bio;
this.user_job = params.user_job; 
this.user_interest = params.user_interest;
}

Post.prototype = {

}

module.exports = Post; 