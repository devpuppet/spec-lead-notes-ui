import { YesNoToBooleanMapper } from '../mappers/yes-no.mapper';
import { YesNoPipe } from './yes-no.pipe';

describe('YesNoPipe', () => {
  it('create an instance', () => {
    const pipe = new YesNoPipe(new YesNoToBooleanMapper());
    expect(pipe).toBeTruthy();
  });
});
