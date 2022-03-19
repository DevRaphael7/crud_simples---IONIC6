import { InputForm } from './../../../interface/input';

export const formulario: InputForm[] = [
    {
        mascara: '',
        placeholderValue: 'Seu nome',
        temMascara: false,
        titulo: 'Nome'
    },
    {
        mascara: '',
        placeholderValue: 'Seu email',
        temMascara: false,
        titulo: 'Email',
    },
    {
        mascara: '00/00/0000',
        placeholderValue: '00/00/0000',
        temMascara: true,
        titulo: 'Ano'
    }
]