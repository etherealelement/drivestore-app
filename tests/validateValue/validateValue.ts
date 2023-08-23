export const validateValue = (value: number) => {
    if (value < 0 || value < 100) {
        return true;
    }
    return false;
}

