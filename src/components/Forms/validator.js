class Validator {
    constructor() {
        this.field = ''
        this.value = ''
    }

    validateField(field, value) {
        this.field = field
        this.value = value
        return fieldNameValidator(this)
    }
}

function fieldNameValidator(field) {
    return true
}

export default new Validator()