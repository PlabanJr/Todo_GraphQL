import AsyncStorage from '@react-native-community/async-storage'

const { removeItem, setItem } = AsyncStorage

export const signUpService = (token: string, userName: string) => {
    return new Promise(() => {
        setItem('userToken', token)
            .then(() => {
                setItem('userName', userName)
            })
    })
}

export const loginService = (token: string, userName: string) => {
    return new Promise(() => {
        setItem('userToken', token)
            .then(() => {
                setItem('userName', userName)
            })
    })
}

export const logOutService = () => {
    return new Promise((resolve, reject) => {
        removeItem('userToken')
            .then((res) => {
                removeItem('userName')
                resolve(res)
            }).catch((err) => {
                reject(err)
            })
    })
}

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