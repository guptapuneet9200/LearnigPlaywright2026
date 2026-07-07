let isLoggedIn = true;

let userRole = "editor";

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("Welcome you are admin");
    } else if (userRole === "editor") {
        console.log("Welcome you are editor");
    } else {
        console.log("Welcome you are viewer");
    }


} else {
    console.log("You are not logged in !!");
}