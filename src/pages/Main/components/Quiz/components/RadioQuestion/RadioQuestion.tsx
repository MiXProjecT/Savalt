import React from 'react';
import { Root, RadioWrapper, Label, Input, Radio } from './styles';
import { IRadioQuestion } from './types';
import { Typography } from '../../../../../../components';

const RadioQuestion: React.FC<IRadioQuestion> = ({ name, radio, title, onClick, register }) => {
    return (
        <Root>
            <Typography tag="h3" weight="bold" size="subTitle" textDecoration="none" textAlign="center" color="black">
                {title}
            </Typography>
            <RadioWrapper>
                {radio.map((choiceItem, index) => (
                    <Radio key={index}>
                        {index == 0 ? (
                            <Input
                                {...register('name')}
                                id={`${index}`}
                                type="radio"
                                name="radio"
                                value={choiceItem.key}
                                defaultChecked
                            />
                        ) : (
                            <Input
                                {...register('name')}
                                id={`${index}`}
                                type="radio"
                                name="radio"
                                value={choiceItem.key}
                                onClick={onClick}
                            />
                        )}
                        <Label htmlFor={`${index}`}>{choiceItem.answer}</Label>
                    </Radio>
                ))}
            </RadioWrapper>
        </Root>
    );
};

export default RadioQuestion;
