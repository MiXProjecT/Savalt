import React from 'react';
import { IQuizList } from '../../types';
import { RadioQuestion, CheckmarkQuestion, PictureQuestion, GeneralShape } from './components';
import { QUIZ_LIST } from '../../constants';
import { IQuestionModule } from './types';

const QuestionModule: React.FC<IQuestionModule> = ({ next, errors, register, control, counter, setValue }) => {
    const typeChecking = (quizElement: IQuizList) => {
        switch (quizElement.type) {
            case 'radio':
                return (
                    <RadioQuestion
                        register={register}
                        key={`question_module-${quizElement.id}`}
                        radio={quizElement.answers}
                        title={quizElement.title}
                        onClick={next}
                        name={quizElement.name}
                    />
                );
            case 'checkmark':
                return (
                    <CheckmarkQuestion
                        control={control}
                        key={`checkmark_question-${quizElement.id}`}
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
                        key={`picture_question-${quizElement.id}`}
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
                        key={`general_shape-${quizElement.id}`}
                        title={quizElement.title}
                        inputs={quizElement.inputs}
                    />
                );
            default:
                return undefined;
        }
    };

    const quizList = QUIZ_LIST.map((quizElement) => typeChecking(quizElement));

    return <>{quizList[counter]}</>;
};

export default QuestionModule;
