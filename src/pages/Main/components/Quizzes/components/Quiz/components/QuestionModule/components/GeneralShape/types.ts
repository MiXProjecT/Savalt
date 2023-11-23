import { GeneralShapeType } from '../../../../types';
import { Control, FieldErrors, UseFormRegister } from 'react-hook-form';
import { IForm } from '../../../../types';

export interface IGeneralShape {
    title: string;
    inputs: GeneralShapeType[];
    control: Control<IForm>;
    register: UseFormRegister<IForm>;
    errors: FieldErrors<IForm>;
}

export interface IErrors {
    errors: boolean;
}
