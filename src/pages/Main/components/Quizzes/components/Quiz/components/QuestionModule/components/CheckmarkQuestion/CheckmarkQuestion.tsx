import React, { useState } from 'react';
import { Root } from './styles';
import { ICheckmarkQuestion } from './types';
import { Typography } from '../../../../../../../../../../components';
import { CheckboxGroup } from './components';
import { Controller } from 'react-hook-form';

const CheckmarkQuestion: React.FC<ICheckmarkQuestion> = ({ name, title, answers, errors, control }) => {
    return (
        <Root>
            <Typography tag="h3" variant="smallTitle1bold1center" color="black">
                {title}
            </Typography>
            <div>
                <Controller
                    defaultValue={answers[0].value}
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                        <CheckboxGroup
                            defaultValue={answers[0].value}
                            errors={!!errors[name]}
                            answers={answers}
                            onCheckChange={onChange}
                        />
                    )}
                />
                {errors[name] && (
                    <Typography tag="p" variant="smallBody1regular1left" color="orange">
                        Выберите вариант
                    </Typography>
                )}
            </div>
        </Root>
    );
};

export default CheckmarkQuestion;
