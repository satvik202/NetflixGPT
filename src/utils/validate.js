export const validateSignIn = (email, password) =>{
    const t1 = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email)
    const t2 = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
    if(!t1) return "Email is not valid."
    if(!t2) return "Password is not valid."

    return null;
}

export const validateSignUp = (name, email, password) =>{
    const t1 = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email)
    const t2 = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
    const t3 = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name);

    if(!t3) return "Name is not valid"
    if(!t1) return "Email is not valid."
    if(!t2) return "Password is not valid."

    return null;
}