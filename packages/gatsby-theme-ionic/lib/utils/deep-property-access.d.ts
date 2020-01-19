declare type NN<T> = NonNullable<T>;
/**
 * A 6 Level Depth Object Accessor
 * Used to get to the property or return undefined without throwing runtime error
 */
export declare class DeepPropertyAccess {
    static get<T, P1 extends keyof NN<T>>(obj: T, prop1: P1): NN<T>[P1] | undefined;
    static get<T, P1 extends keyof NN<T>, P2 extends keyof NN<NN<T>[P1]>>(obj: T, prop1: P1, prop2: P2): NN<NN<T>[P1]>[P2] | undefined;
    static get<T, P1 extends keyof NN<T>, P2 extends keyof NN<NN<T>[P1]>, P3 extends keyof NN<NN<NN<T>[P1]>[P2]>>(obj: T, prop1: P1, prop2: P2, prop3: P3): NN<NN<NN<T>[P1]>[P2]>[P3] | undefined;
    static get<T, P1 extends keyof NN<T>, P2 extends keyof NN<NN<T>[P1]>, P3 extends keyof NN<NN<NN<T>[P1]>[P2]>, P4 extends keyof NN<NN<NN<NN<T>[P1]>[P2]>[P3]>>(obj: T, prop1: P1, prop2: P2, prop3: P3, prop4: P4): NN<NN<NN<NN<T>[P1]>[P2]>[P3]>[P4] | undefined;
    static get<T, P1 extends keyof NN<T>, P2 extends keyof NN<NN<T>[P1]>, P3 extends keyof NN<NN<NN<T>[P1]>[P2]>, P4 extends keyof NN<NN<NN<NN<T>[P1]>[P2]>[P3]>, P5 extends keyof NN<NN<NN<NN<NN<T>[P1]>[P2]>[P3]>[P4]>>(obj: T, prop1: P1, prop2: P2, prop3: P3, prop4: P4, prop5: P5): NN<NN<NN<NN<NN<T>[P1]>[P2]>[P3]>[P4]>[P5] | undefined;
    static get<T, P1 extends keyof NN<T>, P2 extends keyof NN<NN<T>[P1]>, P3 extends keyof NN<NN<NN<T>[P1]>[P2]>, P4 extends keyof NN<NN<NN<NN<T>[P1]>[P2]>[P3]>, P5 extends keyof NN<NN<NN<NN<NN<T>[P1]>[P2]>[P3]>[P4]>, P6 extends keyof NN<NN<NN<NN<NN<NN<T>[P1]>[P2]>[P3]>[P4]>[P5]>>(obj: T, prop1: P1, prop2: P2, prop3: P3, prop4: P4, prop5: P5, prop6: P6): NN<NN<NN<NN<NN<NN<T>[P1]>[P2]>[P3]>[P4]>[P5]>[P6] | undefined;
}
export {};
