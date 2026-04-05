function createLoginTracker (userInfo){
    let attemptCount = 0
    const maxAttempts = 3
    return (passwordAttempt) => {
        if(attemptCount > maxAttempts){
        return "Account locked due to too many failed login attempts"}
            attemptCount += 1
        if (passwordAttempt === userInfo.password){
            attemptCount = 0
        return "Login successful"} 
        if (attemptCount <= maxAttempts) {
                return `Attempt ${attemptCount}: Login failed`}
         else {return "Account locked due to too many failed login attempts"}
         console.log(`Attempt ${attemptCount} of ${maxAttempts}...`)
        } }
    module.exports ={createLoginTracker}
    // Mock user data
    const mockUser = {
        username: "Admin",
        password: "password123",
    }
    const user1Login = createLoginTracker(mockUser)
    console.log(user1Login("welcome"))
    console.log(user1Login("password1"))
    console.log(user1Login("password3"))
    console.log(user1Login("password123"))

  
  
    

