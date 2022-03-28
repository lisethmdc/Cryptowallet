export async function login({ username, password }) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "liseth" && password === "1234") {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    });
}