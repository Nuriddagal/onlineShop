module.exports = (async () => {
    const config = await import('@nuriddagal/dev-config/eslint');
    return config; // или config, если там не default
})();
