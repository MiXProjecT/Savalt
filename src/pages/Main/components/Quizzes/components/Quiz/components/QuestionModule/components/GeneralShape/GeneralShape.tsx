import React from 'react';
import { Root, SelectWrapper, StyledSelect, InputTitleWrapper, InputField, ErrorsWrapper } from './styles';
import { IGeneralShape } from './types';
import { Typography } from '@mainComponents/index';
import { Controller } from 'react-hook-form';
import { GeneralShapeType } from '../../../../types';
import getData from '@Functions/getData';

const GeneralShape: React.FC<IGeneralShape> = ({ inputs, title, control, errors }) => {
    const handleSelect = (name: string, e: any) => {
        if (e) {
            console.log('VALUE ', e.value);
            sessionStorage.setItem(name, JSON.stringify(e.value));
            return e.value;
        }
    };

    const handleChange = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
        sessionStorage.setItem(name, JSON.stringify(e.currentTarget.value));
        return e.currentTarget.value;
    };

    const typeChecking = (generalShapeInputs: GeneralShapeType) => {
        switch (generalShapeInputs.type) {
            case 'select':
                return (
                    <SelectWrapper key={generalShapeInputs.name}>
                        <Typography tag="p" variant="body1regular1left" color="black">
                            {generalShapeInputs.title}
                        </Typography>
                        <Controller
                            name={generalShapeInputs.name}
                            control={control}
                            defaultValue={getData(generalShapeInputs.name, generalShapeInputs.answers[0].value)}
                            render={({ field: { onChange: onCheckChange, value, name: fieldName } }) => (
                                <StyledSelect
                                    className="Select__container"
                                    classNamePrefix="Select"
                                    value={generalShapeInputs.answers.find((answer) => answer.value === value)}
                                    options={generalShapeInputs.answers}
                                    defaultValue={getData(generalShapeInputs.name, generalShapeInputs.answers[0].value)}
                                    onChange={(e) => onCheckChange(handleSelect(fieldName, e))}
                                />
                            )}
                        />
                    </SelectWrapper>
                );
            case 'input':
                return (
                    <InputTitleWrapper key={generalShapeInputs.name}>
                        <Typography tag="label" variant="body1regular1left" color="black">
                            {generalShapeInputs.title}
                        </Typography>
                        <ErrorsWrapper>
                            <Controller
                                name={generalShapeInputs.name}
                                control={control}
                                rules={{ required: true }}
                                defaultValue={getData(generalShapeInputs.name, '')}
                                render={({ field: { onChange: onCheckChange, name: fieldName } }) => (
                                    <InputField
                                        value={getData(generalShapeInputs.name, '')}
                                        errors={!!errors[generalShapeInputs.name]}
                                        type="text"
                                        placeholder={generalShapeInputs.placeholder}
                                        onChange={(e) => onCheckChange(handleChange(fieldName, e))}
                                    />
                                )}
                            />
                            {errors[generalShapeInputs.name] && (
                                <Typography tag="p" variant="smallBody1regular1left" color="orange">
                                    Поле должно быть заполнено
                                </Typography>
                            )}
                        </ErrorsWrapper>
                    </InputTitleWrapper>
                );
            default:
                alert('Нет таких значений');
        }
    };

    return (
        <Root>
            <Typography tag="h3" variant="smallTitle1bold1center" color="black">
                {title}
            </Typography>
            {inputs.map((selectItem) => typeChecking(selectItem))}
        </Root>
    );
};

export default GeneralShape;
