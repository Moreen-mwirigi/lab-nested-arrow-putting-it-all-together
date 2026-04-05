function createLoginTracker (userInfo){
    let attemptCount = 0
    const maxAttempts = 3
    return (passwordAttempt) => {
        if(attemptCount > maxAttempts){
        return "Account locked due to too many failed login attempts"}
            attemptCount += 1
        if (passwordAttempt === userInfo.password){
        return "Login Successful!"}
        else {return `Login Failed, wrong password. Attempts left: ${maxAttempts} - ${attemptCount}`}
            console.log(`Attempt ${attemptCount} of ${maxAttempts}...`)
        }
    }
    // Mock user data
    const mockUser = {
        username: "Admin",
        password: "password123",
    }
    const user1Login = createLoginTracker(mockUser)
    console.log(user1Login("welcome"))
    console.log(user1Login("password123"))
  
  
  
    

