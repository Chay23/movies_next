'use client';

import type { ReactNode } from 'react';

import Layout from './components/layout/Layout';

type Props = {
  children: ReactNode;
};

export default function LayoutComponent({ children }: Props) {
  return <Layout>{children}</Layout>;
}
