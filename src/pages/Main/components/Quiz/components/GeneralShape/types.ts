import { GeneralShapeType } from '../../../../types';
import { Control, UseFormRegister } from 'react-hook-form';
import { IForm } from '../../types';

export interface IGeneralShape {
    title: string;
    inputs: GeneralShapeType[];
    control: Control<IForm>;
    register: UseFormRegister<IForm>;
}
