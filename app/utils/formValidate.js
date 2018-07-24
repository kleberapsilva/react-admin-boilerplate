import React from 'react'

export const required = (message = 'Campo obrigatório.') =>
    value => value ? undefined : message;

export const maxLength = (max, message = `O campo deve ser menor que ${max}`) =>
    value => value && value.length > max ? message : undefined;

export const number = (message = 'O campo deve ser número.') =>
    value => value && isNaN(Number(value)) ? message : undefined;

export const minValue = (min, message = `O campo deve ser maior que ${min}`) =>
    value => value && value < min ? message : undefined;

export const ageValidation = (value, allValues) => {
    if (!value) {
        return 'O campo idade deve ser obrigatório.';
    }
    if (value < 18) {
        return 'O valor deve ser maior que 18';
    }
    return [];
}

export const isValidCPF = (message = 'Por favor, digite um cpf válido.')=>
value => value && !validateCPF(value) ? message : undefined;

export const isValidCNPJ = (message = 'Por favor, digite um cnpj válido.')=>
value => value && !validateCNPJ(value) ? message : undefined;

export const validateFirstName = [required(), maxLength(15)];
export const validateAge = [required(), number(), ageValidation];
export const validateRequired = [required()];
export const validCPF = [required(), isValidCPF()];
export const validCNPJ = [required(), isValidCNPJ()];

function validateCPF(value)
{
    let numeros, digitos, soma, i, resultado, digitos_iguais;
    digitos_iguais = 1;
    let exp = /\.|\-|\//g

    if (value.length < 11)
          return false;
    for (i = 0; i < value.length - 1; i++)
          if (value.charAt(i) != value.charAt(i + 1))
                {
                digitos_iguais = 0;
                break;
                }
    if (!digitos_iguais)
          {
          numeros = value.substring(0,9);
          digitos = value.substring(9);
          soma = 0;
          for (i = 10; i > 1; i--)
                soma += numeros.charAt(10 - i) * i;
          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
          if (resultado != digitos.charAt(0))
                return false;
          numeros = value.substring(0,10);
          soma = 0;
          for (i = 11; i > 1; i--)
                soma += numeros.charAt(11 - i) * i;
          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
          if (resultado != digitos.charAt(1))
                return false;
          return true;
          }
    else
        return false;
}

//valida o CNPJ digitado
function validateCNPJ(str)
{
    str = str.replace('.','');
    str = str.replace('.','');
    str = str.replace('.','');
    str = str.replace('-','');
    str = str.replace('/','');
    let cnpj = str;
    let numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;
    digitos_iguais = 1;
    if (cnpj.length < 14 && cnpj.length < 15)
        return false;
    for (i = 0; i < cnpj.length - 1; i++)
        if (cnpj.charAt(i) != cnpj.charAt(i + 1))
    {
        digitos_iguais = 0;
        break;
    }
    if (!digitos_iguais)
    {
        tamanho = cnpj.length - 2
        numeros = cnpj.substring(0,tamanho);
        digitos = cnpj.substring(tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--)
        {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        tamanho = tamanho + 1;
        numeros = cnpj.substring(0,tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--)
        {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
    }
    else
        return false;

}
