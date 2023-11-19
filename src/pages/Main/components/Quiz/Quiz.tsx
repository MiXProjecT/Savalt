import React, { useState } from 'react';
import { Root, TitleWrapper, Form, ControlButtonsWrapper, ProgressBar, Filler } from './styles';
import { Button, Link, Typography } from '../../../../components';
import { RadioQuestion, Input, SelectQuestion, CheckmarkQuestion, PictureQuestion, GeneralShape } from './components';
import { IQuiz } from './types';
import { IForm } from './types';
import { IQuizList } from '../../types';
import { useForm, SubmitHandler } from 'react-hook-form';

const Quiz: React.FC<IQuiz> = ({ quiz }) => {
    const [counter, setCounter] = useState(0);
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<IForm>();
    const step = 100 / (quiz.length - 1);
    const onSubmit: SubmitHandler<IForm> = (data) => console.log(data);

    const next = () => {
        setTimeout(() => {
            setCounter((prev) => prev + 1);
        }, 100);
    };

    const previous = () => {
        setTimeout(() => {
            setCounter((prev) => prev - 1);
        }, 100);
    };

    const typeChecking = (quizElement: IQuizList) => {
        switch (quizElement.type) {
            case 'radio':
                return (
                    <RadioQuestion
                        register={register}
                        key={quizElement.id}
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
                        key={quizElement.id}
                        name={quizElement.name}
                        title={quizElement.title}
                        answers={quizElement.answers}
                    />
                );
            case 'picture':
                return (
                    <PictureQuestion
                        onClick={next}
                        register={register}
                        key={quizElement.id}
                        name={quizElement.name}
                        title={quizElement.title}
                        answer={quizElement.answers}
                    />
                );
            case 'generalShape':
                return (
                    <GeneralShape
                        control={control}
                        register={register}
                        key={quizElement.id}
                        title={quizElement.title}
                        inputs={quizElement.inputs}
                    />
                );
            default:
                alert('Нет таких значений');
        }
    };
    const quizList = quiz.map((quizElement) => typeChecking(quizElement));

    return (
        <Root>
            <TitleWrapper>
                <Typography tag="h2" weight="bold" size="title" textDecoration="none" textAlign="center" color="orange">
                    ВЫБЕРИТЕ, ЧТО ВАМ ВАЖНО В РАБОТЕ, И МЫ С ВАМИ СВЯЖЕМСЯ
                </Typography>
                <Typography
                    tag="p"
                    weight="bold"
                    size="description"
                    textDecoration="none"
                    textAlign="center"
                    color="black"
                >
                    Или просто позвоните нам:
                    <Link
                        color="orange"
                        variant="base"
                        href="tel:+79222144787"
                        display="nonFlex"
                        fontSize="description"
                        linkSize="base"
                    >
                        +7 (922) 214-47-87
                    </Link>
                    . Виктория
                </Typography>
            </TitleWrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <ProgressBar>
                    <Filler completed={step * counter} />
                </ProgressBar>
                {quizList[counter]}
                <ControlButtonsWrapper>
                    {counter != 0 ? (
                        <Button onClick={previous} variant="control" type="button">
                            ← Назад
                        </Button>
                    ) : undefined}
                    {counter == quiz.length - 1 ? (
                        <Button variant="control" type="submit">
                            Отправить
                        </Button>
                    ) : (
                        <Button onClick={next} variant="control" type="button">
                            Далее →
                        </Button>
                    )}
                </ControlButtonsWrapper>
            </Form>
        </Root>
    );
};

export default Quiz;
