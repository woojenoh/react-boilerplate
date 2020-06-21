import { numberWithComma } from '../src/shared/utils.ts';

describe('numberWithComma', () => {
  it('1000 미만일 때는 붙여주지 않는다.', () => {
    expect(numberWithComma(300)).toBe('300');
  });
  it('1000 이상일 때는 붙여준다.', () => {
    expect(numberWithComma(3000)).toBe('3,000');
  });
  it('1000000 이상일 때는 두개 붙여준다.', () => {
    expect(numberWithComma(3000000)).toBe('3,000,000');
  });
});