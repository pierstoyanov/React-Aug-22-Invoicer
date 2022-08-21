export const titleColor = (action) => {
    if (action === "register") {
        return "secondary"
    }
    if (action === "login") {
        return "success"
    }
}

export const btnColors = {
    login: "success",
    register: "secondary"
}

export const btnColor = (action) => {
    if (action === "register") {
        return "secondary"
    }
    if (action === "login") {
        return "success"
    }
}