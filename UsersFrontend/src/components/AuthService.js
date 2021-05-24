
class AuthService{
    registerSuccessfulLogin=(username,post)=>{
        sessionStorage.setItem(username,post);
    }
    isLoggedIn=()=>{
        if(sessionStorage.length>0) return true;
        else return false;
    }
    logout=()=>{
        sessionStorage.clear();
    }
    getAuthenticatedUser=()=>{
        if(sessionStorage.getItem("aditya")!=null)
        return "aditya"
        else return "sarthi"
    }
    isAdmin=()=>{
        if(sessionStorage.getItem("aditya")!=null)
        return true;
        else return false;
    }
    getLoggedInUser=()=>{
        if(sessionStorage.getItem("aditya")==null)
        return "sarthi";
        else return "aditya";
    }
}

export default new AuthService();