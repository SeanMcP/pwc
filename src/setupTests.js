function getPropsFactory(defaultProps) {
    return (overrides = {}) => ({
        ...defaultProps,
        ...overrides,
    })
}

global.getPropsFactory = getPropsFactory
