import { DeepPropertyAccess } from '../deep-property-access'

const testObject = {
  level6: {
    level5: {
      level4: {
        level3: {
          level2: {
            level1: ['Hello'],
          },
        },
      },
    },
  },
}

describe('DeepPropertyAccess', () => {
  it('can access property nested 6 levels deep', () => {
    expect(DeepPropertyAccess.get(testObject, 'level6', 'level5')).toEqual(
      expect.objectContaining({
        level4: {
          level3: {
            level2: {
              level1: ['Hello'],
            },
          },
        },
      }),
    )
    expect(DeepPropertyAccess.get(testObject, 'level6', 'level5', 'level4', 'level3', 'level2', 'level1')).toEqual([
      'Hello',
    ])
  })
})
