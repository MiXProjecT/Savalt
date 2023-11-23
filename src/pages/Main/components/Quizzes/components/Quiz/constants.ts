import { IQuizList } from './types';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

export const QUIZ_LIST: IQuizList[] = [
    {
        title: 'Стаж вождения категории Е',
        type: 'generalShape',
        inputs: [
            {
                title: 'Выберите один из вариантов',
                name: 'Опыт',
                type: 'select',
                answers: [
                    { value: 'menee_1_goda', label: 'Менее 1 года' },
                    { value: 'bolle_1_goda', label: 'Более 1 года' },
                    { value: 'bolle_5_goda', label: 'Более 5 лет' },
                    { value: 'bolle_10_goda', label: 'Более 10 лет' },
                ],
            },
            { title: 'Введите имя', type: 'input', placeholder: '', name: 'Сколько лет' },
        ],
    },
    {
        name: 'grafik',
        title: 'Желаемый график работы?',
        type: 'checkmark',
        answers: [
            { label: '15/15', value: '15_15' },
            { label: '21/7', value: '21_7' },
            { label: '30/10', value: '30_10' },
        ],
    },
    {
        title: 'Стаж вождения категории Е',
        type: 'picture',
        name: 'Пол',
        answers: [
            { image: image1, key: 'Мужик', answer: 'Мужик' },
            { image: image2, key: 'Девушка', answer: 'Девушка' },
            { image: image3, key: 'Люди', answer: 'Люди' },
        ],
    },
    {
        name: 'График',
        title: 'Желаемый график работы?',
        type: 'checkmark',
        answers: [
            { label: '15/15', value: '15_15' },
            { label: '21/7', value: '21_7' },
            { label: '30/10', value: '30_10' },
        ],
    },
    {
        name: 'Права',
        title: 'Есть ли судимость/лишались ли прав?',
        type: 'radio',
        answers: [
            { answer: 'Нет', key: 'net' },
            { answer: 'Да, судимость', key: 'sudimost' },
            { answer: 'Да, лишался прав', key: 'net_prav' },
            { answer: 'Да, и судимость и лишался прав', key: 'sudimost_i_resheniye' },
        ],
    },
];
