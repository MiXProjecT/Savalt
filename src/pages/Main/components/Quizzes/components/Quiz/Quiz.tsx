import React, { useState } from 'react';
import { IForm } from './types';
import {
    CloudWrapper,
    ControlButtonsWrapper,
    CounterWrapper,
    Filler,
    Form,
    ProgressBar,
    ProgressBarWrapper,
} from './styles';
import { Button, Typography } from '@mainComponents/index';
import { QUIZ_LIST } from './constants';
import { Cloud, QuestionModule, PopUpThanks } from './components';
import { SubmitHandler, useForm } from 'react-hook-form';

const Quiz = () => {
    const [activePopUpThanks, setActivePopUpThanks] = useState(false);
    const [counter, setCounter] = useState(0);
    const {
        handleSubmit,
        control,
        trigger,
        clearErrors,
        formState: { errors },
    } = useForm<IForm>();
    const step = 100 / QUIZ_LIST.length;
    const stepCloud = 224 / QUIZ_LIST.length;

    const onSubmit: SubmitHandler<IForm> = (data) => {
        console.log(data, 'СУБМИТЕ');
        setTimeout(() => {
            localStorage.removeItem('mainForm');
        });
        localStorage.removeItem('mainForm');
        setCounter(0);
        setActivePopUpThanks(true);
    };

    const next = () => {
        clearErrors();
        trigger().then((result) => {
            if (result) {
                console.log(counter, ' counter');
                if (counter + 1 != QUIZ_LIST.length) {
                    setCounter((prev) => prev + 1);
                    console.log(counter, ' counter');
                    console.log(QUIZ_LIST.length, ' QUIZ_LIST.length');
                }
            }
        });
    };

    const previous = () => {
        setCounter((prev) => prev - 1);
    };

    return (
        <React.Fragment>
            {activePopUpThanks ? <PopUpThanks setActivePopUpThanks={setActivePopUpThanks} /> : undefined}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <ProgressBarWrapper>
                    <CloudWrapper completed={stepCloud * (counter + 1) - 26}>
                        <CounterWrapper>
                            <Typography tag="p" variant="smallBody1regular1left" color="white">
                                {counter + 1} / {QUIZ_LIST.length}
                            </Typography>
                        </CounterWrapper>
                        <Cloud color="#e75a45" />
                    </CloudWrapper>
                    <ProgressBar>
                        <Filler completed={step * (counter + 1)} />
                    </ProgressBar>
                </ProgressBarWrapper>
                <QuestionModule next={next} counter={counter} control={control} errors={errors} />
                <ControlButtonsWrapper>
                    {counter != 0 ? (
                        <Button onClick={previous} variant="control" type="button">
                            ← Назад
                        </Button>
                    ) : undefined}
                    {counter + 1 != QUIZ_LIST.length ? (
                        <Button onClick={next} variant="control" type="button">
                            Далее →
                        </Button>
                    ) : undefined}
                    {counter + 1 == QUIZ_LIST.length ? (
                        <Button variant="control" type="submit">
                            Отправить
                        </Button>
                    ) : undefined}
                </ControlButtonsWrapper>
            </Form>
        </React.Fragment>
    );
};

export default Quiz;
