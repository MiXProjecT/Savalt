import React from 'react';
import { IQuizList } from '../../types';
import { RadioQuestion, CheckmarkQuestion, PictureQuestion, GeneralShape } from './components';
import { QUIZ_LIST } from '../../constants';
import { IQuestionModule } from './types';

const QuestionModule: React.FC<IQuestionModule> = ({ next, errors, register, control, counter }) => {
    const typeChecking = (quizElement: IQuizList, index: number) => {
        switch (quizElement.type) {
            case 'radio':
                return (
                    <RadioQuestion
                        register={register}
                        key={index}
                        radio={quizElement.answers}
                        title={quizElement.title}
                        onClick={next}
                        name={quizElement.name}
                    />
                );
            case 'checkmark':
                return (
                    <CheckmarkQuestion
                        register={register}
                        key={index}
                        name={quizElement.name}
                        title={quizElement.title}
                        answers={quizElement.answers}
                        errors={errors}
                    />
                );
            case 'picture':
                return (
                    <PictureQuestion
                        onClick={next}
                        register={register}
                        key={index}
                        name={quizElement.name}
                        title={quizElement.title}
                        answer={quizElement.answers}
                    />
                );
            case 'generalShape':
                return (
                    <GeneralShape
                        errors={errors}
                        control={control}
                        register={register}
                        key={index}
                        title={quizElement.title}
                        inputs={quizElement.inputs}
                    />
                );
            default:
                alert('Нет таких значений');
        }
    };

    const quizList = QUIZ_LIST.map((quizElement, index) => typeChecking(quizElement, index));

    return <>{quizList[counter]}</>;
};

export default QuestionModule;
