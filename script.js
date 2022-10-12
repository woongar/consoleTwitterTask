
function User(someUserName) {
    this.userName = someUserName;
    this.followers = [];
    this.iFollow = [];

    this.addFollower = function(someUser) {
        this.followers.push(someUser);           //Adding the follower to my list of lollowers line 28
        someUser.iFollow.push(this);           //Adding myself to follow people
    };

    this.sendMessage = function(myPost) {
        this.followers.forEach((follower)=>{
            follower.getMessage(myPost, this.userName)      //myUser2.getMessage... myUser3.getMessage... myUser4.getMessage
        });
    };

    this.getMessage = function(myPost, sender) {
        console.log(this.userName + " got this message from " + sender + ": " + myPost);
    };
}

let myUser1 = new User("Gal");
let myUser2 = new User("Noa");
let myUser3 = new User("Yaniv");
let myUser4 = new User("Dona");

myUser1.addFollower(myUser2);    //myUser1 is being followed by myUser2,   myUser2 is being followed by myUser1
myUser1.addFollower(myUser3);
myUser1.addFollower(myUser4);    //myUser1.followers.push(myUser4)   myUser4.iFollow.push(myUser1)

myUser2.addFollower(myUser3);
myUser2.addFollower(myUser4);

myUser1.addFollower(myUser4);

myUser1.sendMessage("Hello its me");

console.log(myUser1);
console.log(myUser2);
console.log(myUser3);
console.log(myUser4);