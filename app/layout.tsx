import { Container } from '@mui/material';
import { Providers } from '@/lib/providers';

import styles from '@/styles/layout.module.css';
import '@/styles/globals.css';

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body style={{ fontSize: '16px' }}>
          <section className={styles.container}>
            <main className={styles.main}>
              <Container>
                {props.children}
              </Container>
            </main>
          </section>
        </body>
      </html>
    </Providers>
  )
}
