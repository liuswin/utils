
/**
 * json转换，国际化标准格式
 * @param {} data 
 */
export function transferJson(data){
    let temp = [];
    try {        
        if(!!data){
            temp = getTransferJson(data,temp,'','.')  
        }else{
            throw("待转译的json对象异常")
        }          
    } catch (error) {
        console.log(error);
    }
    return temp;
}

function getTransferJson(jsons, temp, name, sign) {    
    for(let key in jsons){
        let k = "";
        if(name === "" || name === undefined) {
            k = key; 
        }else{
            k = name + sign + key; 
        }
        if(!(jsons[key] instanceof Object)){
            const arrObj = {};
            const kKey = k;
            arrObj[kKey]=jsons[key]; 
            temp.push(arrObj);            
        }else{
            getTransferJson(jsons[key], temp, k, sign);
        }
    }
    return temp || [];
}

/**
 * json转换带ID
 * @param {} data 
 */
export function transferJsonContainsID(data) {    
    let temp = {};
    try {        
        if(!!data){
            temp = getTransferJsonContainsID(data,temp,'','.')  
        }else{
            throw("待转译的json对象异常")
        }          
    } catch (error) {
        console.log(error);
    }
    return temp;
}

function getTransferJsonContainsID(jsons, temp, name, sign) {    
    for(let key in jsons){
        let k = "";
        if(name === "" || name === undefined) {
            k = key; 
        }else{
            k = name + sign + key; 
        }        
        if(typeof jsons[key] === "object" && jsons[key].constructor === Object){
            if(jsons[key].hasOwnProperty("defaultMessage")){
                temp[k] = {"id":k,"defaultMessage":jsons[key].defaultMessage}; 
            }else{
                getTransferJsonContainsID(jsons[key], temp, k, sign);
            }                     
        }
    }
    return temp || {};
}