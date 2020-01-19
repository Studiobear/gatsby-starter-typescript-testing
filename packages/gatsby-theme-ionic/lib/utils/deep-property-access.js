"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A 6 Level Depth Object Accessor
 * Used to get to the property or return undefined without throwing runtime error
 */
class DeepPropertyAccess {
    /* tslint:enable:max-line-length */
    // ...and so on...
    // the actual function to extract the property
    static get(obj, ...props) {
        return obj && props.reduce((result, prop) => (result == null ? undefined : result[prop]), obj);
    }
}
exports.DeepPropertyAccess = DeepPropertyAccess;
/**
 * Usage
 */
const obj = {
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
};
const result = DeepPropertyAccess.get(obj, 'level6', 'level5', 'level4', 'level3', 'level2', 'level1');
// console.log(result);
//# sourceMappingURL=deep-property-access.js.map