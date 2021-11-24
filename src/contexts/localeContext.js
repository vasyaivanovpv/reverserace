import React from 'react';

const LocaleContext = React.createContext(null);
const { Provider: LocaleProvider, Consumer: LocaleConsumer } = LocaleContext;

export { LocaleProvider, LocaleConsumer };
export default LocaleContext;
