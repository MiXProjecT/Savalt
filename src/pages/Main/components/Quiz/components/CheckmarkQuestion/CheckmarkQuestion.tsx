import React from 'react';
import { Root, Label, Input, Span, CheckmarkWrapper } from './styles';
import { ICheckmarkQuestion } from './types';
import { Typography } from '../../../../../../components';

const CheckmarkQuestion: React.FC<ICheckmarkQuestion> = ({ name, title, register, answers, errors }) => {
    return (
        <Root>
            <Typography tag="h3" weight="bold" size="subTitle" textDecoration="none" textAlign="center" color="black">
                {title}
            </Typography>
            <CheckmarkWrapper>
                {answers.map((answerItem, index) => (
                    <Label key={index} htmlFor={`${index}`} errors={!!errors[name]}>
                        {/* Поправить defaultChecked index === 0 */}
                        {index == 0 ? (
                            <Input
                                {...register(name, { required: true })}
                                type="checkbox"
                                value={answerItem.value}
                                id={`${index}`}
                                defaultChecked
                            />
                        ) : (
                            <Input
                                type="checkbox"
                                value={answerItem.value}
                                id={`${index}`}
                                {...register(name, { required: true })}
                            />
                        )}
                        <Span>{answerItem.label}</Span>
                    </Label>
                ))}
                {errors[name] && (
                    <Typography
                        tag="p"
                        weight="regular"
                        size="subtext"
                        textDecoration="none"
                        textAlign="center"
                        color="orange"
                    >
                        Выберите вариант
                    </Typography>
                )}
            </CheckmarkWrapper>
        </Root>
    );
};

export default CheckmarkQuestion;
