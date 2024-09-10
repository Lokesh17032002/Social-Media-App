//These functions are marked as async because in a 
//real-world scenario, they'll likely be dealing with 
//asynchronous operations, such as database interactions 
//(e.g., saving a new user or verifying login credentials).

export const signup = async(req,res) =>{
    res.json({
        data:"You hit thhe signup endpoint",
    });
}

export const login = async(req,res) =>{
    //res.json() is an Express method that sends a 
    //JSON-formatted response. It automatically sets the 
    //content type to application/json.
    res.json({
        data:"You hit thhe login endpoint",
    });
}

export const logout = async(req,res) =>{
    res.json({
        data:"You hit thhe logout endpoint",
    });
}