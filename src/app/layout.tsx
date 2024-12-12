import '@/styles/globals.css';
import { Metadata } from 'next';
import { Providers } from './providers';
import StyledJsxRegistry from './registry';
// import type { Route } from 'next';

export const metadata: Metadata = {
  title: 'DApp',
  description: 'DApp',
  keywords: ['dapp'],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <StyledJsxRegistry>
            <div className="text-green-600">{children}</div>
          </StyledJsxRegistry>
        </Providers>
      </body>
    </html>
  );
}
