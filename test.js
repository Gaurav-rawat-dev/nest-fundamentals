const { ConsoleLogger } = require("@nestjs/common")
const { number } = require("zod")

const str = "20"
console.log(typeof str)

const typeChanged = Number(str)
console.log(typeof typeChanged)