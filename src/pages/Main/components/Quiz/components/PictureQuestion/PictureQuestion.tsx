import React from 'react';
import { Root, RadioWrapper, Label, Input, Radio, Image } from './styles';
import { IPictureQuestion } from './types';
import { Typography } from '../../../../../../components';

const PictureQuestion: React.FC<IPictureQuestion> = ({ name, answer, title, register, onClick }) => {
    return (
        <Root>
            <Typography tag="h3" weight="bold" size="subTitle" textDecoration="none" textAlign="center" color="black">
                {title}
            </Typography>
            <RadioWrapper>
                {answer.map((choiceAnswer, index) => (
                    <Radio key={index}>
                        {index == 0 ? (
                            <Input
                                {...register(name)}
                                id={`${index}`}
                                type="radio"
                                name="radio"
                                value={choiceAnswer.key}
                                defaultChecked
                            />
                        ) : (
                            <Input
                                {...register(name)}
                                id={`${index}`}
                                type="radio"
                                name="radio"
                                value={choiceAnswer.key}
                            />
                        )}
                        <Label onClick={onClick} htmlFor={`${index}`}>
                            <Image src={choiceAnswer.image} />
                            <Typography
                                tag="p"
                                weight="regular"
                                size="description"
                                textDecoration="none"
                                textAlign="center"
                                color="black"
                            >
                                {choiceAnswer.answer}
                            </Typography>
                        </Label>
                    </Radio>
                ))}
            </RadioWrapper>
        </Root>
    );
};

export default PictureQuestion;
