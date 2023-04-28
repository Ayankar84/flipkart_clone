const URL = "http://localhost:8080"
export const handelSignup = async (val)=>{
    try{
        const info = await fetch(`${URL}/signup`, {
            method: "POST",
            body: JSON.stringify(val),
            headers: {"content-type": "application/json"}
        });
        const jsonInfo = await info.json();
        console.log("before: ", jsonInfo);
        return jsonInfo;
    }catch(e){
        console.log(e.message)
    }
}

export const handelLogin = async (val)=>{
    try{
        const info = await fetch(`${URL}/login`, {
            method: "POST",
            body: JSON.stringify(val),
            headers: {"content-type": "application/json"}
        });
        const jsonInfo = await info.json();
        console.log("before: ", jsonInfo);
        return jsonInfo;
    }catch(e){
        console.log(e.message)
    }
}

