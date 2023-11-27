import React from 'react';
import { Root, RadioWrapper, Label, Input, Radio, Image } from './styles';
import { IPictureQuestion } from './types';
import { Typography } from '../../../../../../../../../../components';

const PictureQuestion: React.FC<IPictureQuestion> = ({ name, answer, title, register, onClick }) => {
    return (
        <Root>
            <Typography tag="h3" variant="smallTitle1bold1center" color="black">
                {title}
            </Typography>
            <RadioWrapper>
                {answer.map((pictureAnswer, index) => (
                    <Radio key={index}>
                        {index == 0 ? (
                            <Input
                                {...register(name)}
                                id={`${index}`}
                                type="radio"
                                name="radio"
                                value={pictureAnswer.key}
                                defaultChecked
                            />
                        ) : (
                            <Input
                                {...register(name)}
                                id={`${index}`}
                                type="radio"
                                name="radio"
                                value={pictureAnswer.key}
                            />
                        )}
                        <Label onClick={onClick} htmlFor={`${index}`}>
                            <Image src={pictureAnswer.image} />
                            <Typography tag="p" variant="body1regular1center" color="black">
                                {pictureAnswer.answer}
                            </Typography>
                        </Label>
                    </Radio>
                ))}
            </RadioWrapper>
        </Root>
    );
};

export default PictureQuestion;
