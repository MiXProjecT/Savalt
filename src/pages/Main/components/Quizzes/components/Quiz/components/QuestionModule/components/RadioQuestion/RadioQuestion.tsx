import React from 'react';
import { Root, ErrorWrapper } from './styles';
import { IRadioQuestion } from './types';
import { Typography } from '../../../../../../../../../../components';
import { Controller } from 'react-hook-form';
import { RadioGroup } from './components';
import getData from '../../../../../../../../../../functions/getData';

const RadioQuestion: React.FC<IRadioQuestion> = ({ name, radio, title, control, onClick, errors }) => {
    const checkType = (value: string | string[]) => (typeof value == 'string' ? value : '');

    return (
        <Root>
            <Typography tag="h3" variant="smallTitle1bold1center" color="black">
                {title}
            </Typography>
            <ErrorWrapper>
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    defaultValue={getData(name, radio[0].key)}
                    render={({ field: { onChange, name: fieldName } }) => (
                        <RadioGroup
                            onClick={onClick}
                            errors={!!errors[name]}
                            radio={radio}
                            onCheckChange={onChange}
                            defaultValue={checkType(getData(name, radio[0].key))}
                            fieldName={fieldName}
                        />
                    )}
                />
                {errors[name] && (
                    <Typography tag="p" variant="smallBody1regular1left" color="orange">
                        Выберите вариант
                    </Typography>
                )}
            </ErrorWrapper>
        </Root>
    );
};

export default RadioQuestion;
