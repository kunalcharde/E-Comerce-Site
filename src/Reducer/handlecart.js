
let cart=[]

 const handlecart = (state=cart,action)=>{
    console.log(action.type)
        
            if(action.type==="ADDITEM"){
                console.log(state)
                let tempcart = state?.filter((item)=> item.id=== action.payload?.id)
                    if(tempcart<1){
                        return [...state,action.payload]
                    }
                    else{
                        return tempcart;
                    }
            }
            
            else if(action.type==="DELITEM"){
                return state.filter((item)=> item.id !== action.payload.id);
            }
            else if(action.type==="REMOVEITEM"){
                return []
            }
            else{
                return state;
            }
           
    }


export  default handlecart