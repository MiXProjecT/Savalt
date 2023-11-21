import React, { useState } from 'react';
import {
    Root,
    TitleWrapper,
    Form,
    ControlButtonsWrapper,
    ProgressBar,
    Filler,
    CloudWrapper,
    ProgressBarWrapper,
    CounterWrapper,
} from './styles';
import { Button, Link, Typography } from '../../../../components';
import { RadioQuestion, CheckmarkQuestion, PictureQuestion, GeneralShape, Cloud } from './components';
import { IQuiz } from './types';
import { IForm } from './types';
import { IQuizList } from '../../types';
import { useForm, SubmitHandler } from 'react-hook-form';

const Quiz: React.FC<IQuiz> = ({ quiz }) => {
    const [counter, setCounter] = useState(0);
    // Что это за нахуй
    const [valuesForm, setValuesForm] = useState<IForm>({});
    const {
        register,
        handleSubmit,
        control,
        getValues,
        trigger,
        clearErrors,
        formState: { errors },
    } = useForm<IForm>();
    const step = 100 / quiz.length;
    const stepCloud = 224 / quiz.length;

    const onSubmit: SubmitHandler<IForm> = (data) => {
        console.log(data, 'СУБМИТЕ');
        setCounter(0);
    };

    // убрать clearErrors()
    const next = () => {
        clearErrors();
        trigger().then((result) => {
            if (result) {
                setTimeout(() => {
                    setCounter((prev) => prev + 1);
                }, 100);
                console.log(getValues());
                setValuesForm(getValues());
            }
        });
    };

    const previous = () => {
        setTimeout(() => {
            setCounter((prev) => prev - 1);
        }, 100);
    };

    // Вынести в отдельный компонет
    // key - index - хуйня, удалить поставить name
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
                // ????? return null
                alert('Нет таких значений');
        }
    };
    const quizList = quiz.map((quizElement, index) => typeChecking(quizElement, index));

    // <Questions>{map((elem) => <Page id="1"> isVisible={elem.id === currentPage}>) </Questions>

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
                <ProgressBarWrapper>
                    <CloudWrapper completed={stepCloud * (counter + 1) - 26}>
                        <CounterWrapper>
                            <Typography
                                tag="p"
                                weight="regular"
                                size="subtext"
                                textDecoration="none"
                                textAlign="left"
                                color="white"
                            >
                                {counter + 1} / {quiz.length}
                            </Typography>
                        </CounterWrapper>
                        <Cloud color="#e75a45" />
                    </CloudWrapper>
                    <ProgressBar>
                        <Filler completed={step * (counter + 1)} />
                    </ProgressBar>
                </ProgressBarWrapper>

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
