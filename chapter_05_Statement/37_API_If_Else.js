let statusCode = 200; // Api are working fine

if (statusCode == 200) {
    console.log("Success");
} else if (statusCode == 404) {
    console.log("Not Found");
} else if (statusCode == 500) {
    console.log("Internal Server Error");
} else {
    console.log("Unknown Error");
}

