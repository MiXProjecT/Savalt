import { SelectsTypeSelect } from '../../../../types';
import { Control } from 'react-hook-form';
import { IForm } from '../../types';

export interface ISelectQuestion {
    title: string;
    selects: SelectsTypeSelect[];
    control: Control<IForm>;
}
