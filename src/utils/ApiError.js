class Apierror extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        errors = [],
        statck = ""

    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = false
        this.sucess = false;
        this.errors = errors
        
        if (statck){
            this.stack = statck
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}


export {Apierror}