import React from 'react';
import { Root, SelectWrapper, StyledSelect, InputTitleWrapper, InputField, ErrorsWrapper } from './styles';
import { IGeneralShape } from './types';
import { Typography } from '../../../../../../../../../../components';
import { Controller } from 'react-hook-form';
import { GeneralShapeType } from '../../../../types';

const GeneralShape: React.FC<IGeneralShape> = ({ inputs, title, control, register, errors }) => {
    const typeChecking = (generalShapeInputs: GeneralShapeType, index: number) => {
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
                            defaultValue={generalShapeInputs.answers[0].value}
                            render={({ field: { onChange, value } }) => (
                                <StyledSelect
                                    className="Select__container"
                                    classNamePrefix="Select"
                                    defaultValue={generalShapeInputs.answers[0]}
                                    value={generalShapeInputs.answers.find((c) => c.value === value)}
                                    options={generalShapeInputs.answers}
                                    onChange={onChange}
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
                            <InputField
                                errors={!!errors[generalShapeInputs.name]}
                                {...register(generalShapeInputs.name, { required: true, minLength: 2 })}
                                type="text"
                                placeholder={generalShapeInputs.placeholder}
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
            {inputs.map((selectItem, index) => typeChecking(selectItem, index))}
        </Root>
    );
};

export default GeneralShape;
