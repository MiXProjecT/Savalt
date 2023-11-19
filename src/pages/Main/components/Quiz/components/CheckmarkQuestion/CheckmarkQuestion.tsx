import React from 'react';
import { Root, Label, Input, Span, CheckmarkWrapper } from './styles';
import { ICheckmarkQuestion } from './types';
import { Typography } from '../../../../../../components';
import { Controller } from 'react-hook-form';

const CheckmarkQuestion: React.FC<ICheckmarkQuestion> = ({ name, title, register, answers }) => {
    return (
        <Root>
            <Typography tag="h3" weight="bold" size="subTitle" textDecoration="none" textAlign="center" color="black">
                {title}
            </Typography>
            <CheckmarkWrapper>
                {answers.map((answerItem, index) => (
                    <Label key={index} htmlFor={`${index}`}>
                        {index == 0 ? (
                            <Input
                                {...register(name)}
                                type="checkbox"
                                value={answerItem.value}
                                id={`${index}`}
                                defaultChecked
                            />
                        ) : (
                            <Input type="checkbox" value={answerItem.value} id={`${index}`} {...register(name)} />
                        )}
                        <Span>{answerItem.label}</Span>
                    </Label>
                ))}
            </CheckmarkWrapper>
        </Root>
    );
};

export default CheckmarkQuestion;
