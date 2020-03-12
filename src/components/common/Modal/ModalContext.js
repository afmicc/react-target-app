import React from 'react';

const ModalContext = React.createContext();

export const { Provider: ModalProvider, Consumer: ModalConsumer } = ModalContext;

export default ModalContext;
