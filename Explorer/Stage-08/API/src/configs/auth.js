module.exports = {
    jwt: {
        secret: process.env.AUTH_SECRET || "default", // utilizando variavel de ambiente
        expiresIn: "1d"
    }
}