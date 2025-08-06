'use client';

import React, { ReactNode } from 'react';
import ReactQueryProvider from './queryClientProvider';

const Provider = ({ children }: { children: ReactNode }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default Provider;
