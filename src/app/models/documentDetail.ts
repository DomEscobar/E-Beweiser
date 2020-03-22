import { TypeOption } from '../modules/newform/type-selection/type-selection.component';
import { FormObject } from '../modules/newform/form-content/form-content.component';
export class DocumentDetail
{
    firstname: string;
    lastname: string;
    birth: Date;
    signature: string;
    type: TypeOption;
    formObjects: FormObject[];
    image: string;
    date: Date;
}