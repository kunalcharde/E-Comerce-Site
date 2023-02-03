export const addcart=(product)=>{
    return {
        type : "ADDITEM",
        payload : product
    }
}
export const delItem=(product)=>{
    return {
        type : "DELITEM",
        payload : product
    }
}
export const removeallItem=(product)=>{
    return {
        type : "REMOVEITEM",
        payload : product
    }
}