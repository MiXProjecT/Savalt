import React, { useState } from 'react';
import { IForm, IQuizList } from './types';
import {
    CloudWrapper,
    ControlButtonsWrapper,
    CounterWrapper,
    Filler,
    Form,
    ProgressBar,
    ProgressBarWrapper,
} from './styles';
import { Button, Typography } from '../../../../../../components';
import { QUIZ_LIST } from './constants';
import { Cloud, QuestionModule } from './components';
import { SubmitHandler, useForm } from 'react-hook-form';

const Quiz = () => {
    const [counter, setCounter] = useState(0);
    const {
        register,
        handleSubmit,
        control,
        getValues,
        trigger,
        clearErrors,
        formState: { errors },
    } = useForm<IForm>();
    const step = 100 / QUIZ_LIST.length;
    const stepCloud = 224 / QUIZ_LIST.length;

    const onSubmit: SubmitHandler<IForm> = (data) => {
        console.log(data, 'СУБМИТЕ');
        setCounter(0);
    };

    const next = () => {
        clearErrors();
        trigger().then((result) => {
            if (result) {
                setTimeout(() => {
                    setCounter((prev) => prev + 1);
                }, 100);
            }
        });
    };

    const previous = () => {
        setTimeout(() => {
            setCounter((prev) => prev - 1);
        }, 100);
    };

    return (
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
                            {counter + 1} / {QUIZ_LIST.length}
                        </Typography>
                    </CounterWrapper>
                    <Cloud color="#e75a45" />
                </CloudWrapper>
                <ProgressBar>
                    <Filler completed={step * (counter + 1)} />
                </ProgressBar>
            </ProgressBarWrapper>
            <QuestionModule next={next} register={register} counter={counter} control={control} errors={errors} />
            <ControlButtonsWrapper>
                {counter != 0 ? (
                    <Button onClick={previous} variant="control" type="button">
                        ← Назад
                    </Button>
                ) : undefined}
                {counter == QUIZ_LIST.length - 1 ? (
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
    );
};

export default Quiz;
