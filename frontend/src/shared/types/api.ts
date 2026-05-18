
export type ContactResponse = {
    success : boolean,
    data:{
        name : string,
        message : string
    }
}


export type ContactValidationErrors = {
    name? : string[],
    message? : string[]
}

export type ContactValidationErrorResponse = {
    message : string,
    errors : ContactValidationErrors
}
