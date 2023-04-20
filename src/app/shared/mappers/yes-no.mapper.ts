import { Mapper } from "./mapper";

export class YesNoToBooleanMapper extends Mapper {
    public toClient(yesNo: string): boolean {
        switch(yesNo) {
            case 'Yes':
            case 'yes':
                return true;
            case 'No':
            case 'no':
                return false;
            default:
                throw new Error(`Unknown value = ${yesNo}`);
        }
    }
    public toModel(booleanValue: boolean): string {
        switch(booleanValue) {
            case true:
                return 'Yes';
            case false:
                return 'No';
            default:
                throw new Error(`Unknown value = ${booleanValue}`);
        }
    }

}