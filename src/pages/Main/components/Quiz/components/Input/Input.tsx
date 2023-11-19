import React from 'react';
import { Root, InputField, InputTitleWrapper } from './styles';
import { IInput } from './types';
import { Typography } from '../../../../../../components';

const Input: React.FC<IInput> = ({ inputs, title, register }) => {
    return (
        <Root>
            <Typography tag="h3" weight="bold" size="subTitle" textDecoration="none" textAlign="center" color="black">
                {title}
            </Typography>
            {inputs.map((inputItem, index) => (
                <InputTitleWrapper key={index}>
                    <Typography
                        tag="label"
                        weight="regular"
                        size="description"
                        textDecoration="none"
                        textAlign="center"
                        color="black"
                    >
                        {inputItem.title}
                    </Typography>
                    <InputField {...register(inputItem.name)} type="text" placeholder={inputItem.placeholder} />
                </InputTitleWrapper>
            ))}
        </Root>
    );
};

export default Input;
