import calculate from '../../logic/calculate';

describe('calculagte()', () => {
  test('should give an objet with null values', () => {
    const data = { total: '10', next: '5', operation: '+' };
    const result = calculate(data, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });
});
