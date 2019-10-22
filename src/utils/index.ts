export const validateUsername = (userName: string) => {
    if (!userName || userName.length <= 3) return false;

    return true;
}

export const validateGender = (gender: string) => {
    let genderLowerCase = gender.toLowerCase()

    if (!genderLowerCase || !genderLowerCase.length) return false;
    if (genderLowerCase === 'male' || genderLowerCase === 'female') {
        return true;
    } else return false;

}

export const validateEmail = (email: string) => {
    if (!email || !email.length) return false;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    else return false;
}

export const validatePassword = (password: string) => {
    if (!password || password.length < 5) return false;

    return true;
}