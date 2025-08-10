import config from '@nuriddagal/dev-config/eslint';

export default [
    ...config,
    {
        plugins: ['prefer-arrow'], // подключаем плагин
        rules: {
            'prefer-arrow/prefer-arrow-functions': [
                'error',
                {
                    disallowPrototype: true,
                    singleReturnOnly: false,
                    classPropertiesAllowed: false,
                },
            ],
            // если нужно, можно добавить другие правила
        },
        files: ['**/*.{js,jsx,ts,tsx}'],
        ignores: ['node_modules', 'dist'],
    },
];
