import type { JSXFragment } from '../src/expression/JSXFragment/spec';
import type { JSXAttribute } from '../src/jsx/JSXAttribute/spec';

test('JSXAttribute.value includes JSXFragment', () => {
  expectTypeOf<JSXFragment>().toExtend<NonNullable<JSXAttribute['value']>>();
});
