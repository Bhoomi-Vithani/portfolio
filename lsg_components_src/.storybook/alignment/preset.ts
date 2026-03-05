export const managerEntries = (entry: string[] = []) => {
    return [...entry, require.resolve('./manager')];
};

export const previewAnnotations = (entry: string[] = []) => {
    return [...entry, require.resolve('./preview')];
};
