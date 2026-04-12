function createLoginTracker (username, password){
    const userInfo = {
        username: "Admin",
        password: "password123"
    }
    let attemptCount = 3
    const maxAttempts = 3
    const checkAttempt = (passwordAttempt) => {attemptCount++}
    console.log(`Attempt ${attemptCount} of ${maxAttempts}...`)
    // check if the the maximum number of attempts has been reached
    if(attemptCount > maxAttempts){
        return "Account locked due to too many failed login attempts"}
        //check if the provided password matches the stored password
    else if (passwordAttempt === userInfo.password){
        return "Login Successful!"}
        //handle failed login with remaining attempts info
    else {return `Login Failed, wrong password. Attempts left: ${maxAttempts - attemptCount}`}
    }
let passwordAttempt = "password123"
console.log(createLoginTracker("Admin", "password123")) //test the function


