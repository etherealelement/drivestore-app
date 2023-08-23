import {validateValue} from "./validateValue";


test("Валидация значения", () => {
    expect(validateValue(50)).toBe(true);
})