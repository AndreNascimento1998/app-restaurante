
const useValidation = () => {
    const required = (value) => !!value || '*Campo obrigatório'
    const emailMin = (value) => value.length > 6 || '*Maior que 6 dígitos'
    const upperCase = (value) => /[A-Z]/.test(value) || '*Letra maiúscula AA'
    const lowCase = (value) => /[a-z]/.test(value) || '*Letra minúscula aa'
    const numberCase = (value) => /[1-9]/.test(value) || '*Número 1-9'
    const minLenght = (value) => value.length > 8 || '*Maior que 8 dígitos'
    const phoneMin = (value) => value.length > 13 || '*Maior que 13 dígitos'
    const arrobaRequired = (value) => /@/.test(value) || '*@ obrigatório'


    return {
        required,
        emailMin,
        upperCase,
        lowCase,
        numberCase,
        minLenght,
        phoneMin,
        arrobaRequired
    }
}

export default useValidation