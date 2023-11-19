import React from 'react';
import { Root, SelectWrapper, StyledSelect } from './styles';
import { ISelectQuestion } from './types';
import { Typography } from '../../../../../../components';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

const SelectQuestion: React.FC<ISelectQuestion> = ({ selects, title, control }) => {
    return (
        <Root>
            <Typography tag="h3" weight="bold" size="subTitle" textDecoration="none" textAlign="center" color="black">
                {title}
            </Typography>
            {selects.map((selectItem, index) => (
                <SelectWrapper key={index}>
                    <Typography
                        tag="p"
                        weight="regular"
                        size="description"
                        textDecoration="none"
                        textAlign="left"
                        color="black"
                    >
                        {selectItem.title}
                    </Typography>
                    <Controller
                        name={selectItem.name}
                        control={control}
                        defaultValue={selectItem.answers[0].value}
                        render={({ field: { onChange, value } }) => (
                            <StyledSelect
                                className="Select__container"
                                classNamePrefix="Select"
                                defaultValue={selectItem.answers[0]}
                                value={selectItem.answers.find((c) => c.value === value)}
                                options={selectItem.answers}
                                onChange={onChange}
                            />
                        )}
                    />
                </SelectWrapper>
            ))}
        </Root>
    );
};

export default SelectQuestion;
