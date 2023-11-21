import React from 'react';
import { Root, MainBackground } from './styles';
import { Home, Description, Quiz } from './components';
import { IDescriptionList, IQuizList } from './types';
import boy from '../../assets/images/listIcons/boy-front-color.png';
import car from '../../assets/images/listIcons/car.png';
import crow from '../../assets/images/listIcons/crow-front-color.png';
import fire from '../../assets/images/listIcons/fire-front-color.png';
import money from '../../assets/images/listIcons/money.png';
import pin from '../../assets/images/listIcons/pin-front-color.png';
import shield from '../../assets/images/listIcons/sheild-front-color.png';
import thumb from '../../assets/images/listIcons/thumb-up-front-color.png';
import tick from '../../assets/images/listIcons/tick-front-color.png';
import image1 from '../../assets/images/imageQuestion/image1.jpg';
import image2 from '../../assets/images/imageQuestion/image2.jpg';
import image3 from '../../assets/images/imageQuestion/image3.jpg';

const descriptionList: IDescriptionList[] = [
    { id: 1, description: 'Официальная белая ЗП до 260 000 ₽ два раза в месяц', icon: money },
    { id: 2, description: 'Фиксированный удобный график работы на выбор', icon: pin },
    { id: 3, description: 'Оклад, вне зависимости ни от чего 40.000 ₽', icon: crow },
    { id: 4, description: 'Оплачиваемые отпуск и больничный', icon: fire },
    { id: 5, description: 'Новые машины, еще на гарантии. Поездки только по РФ', icon: car },
    { id: 6, description: 'Льготное кредитование от ведущих банков', icon: tick },
    { id: 7, description: 'ДМС, спецодежда', icon: boy },
    { id: 8, description: 'Работаем по РТО', icon: thumb },
    { id: 9, description: 'В компании есть бронирование', icon: shield },
];
const quiz: IQuizList[] = [
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

const Main = () => {
    return (
        <MainBackground>
            <Root>
                <Home />
                <Description descriptions={descriptionList} />
                <Quiz quiz={quiz} />
            </Root>
        </MainBackground>
    );
};

export default Main;
