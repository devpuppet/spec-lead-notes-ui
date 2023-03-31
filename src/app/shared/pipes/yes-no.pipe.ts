import { Pipe, PipeTransform } from '@angular/core';
import { YesNoToBooleanMapper } from '../mappers/yes-no.mapper';

@Pipe({
  name: 'yesNo'
})
export class YesNoPipe implements PipeTransform {

  constructor(private readonly yesNoToBooleanMapper: YesNoToBooleanMapper) {

  }

  transform(value: boolean): string {
    return this.yesNoToBooleanMapper.toModel(value);
  }

}
