import Head from 'next/head';

export interface HeaderProps {
    title: string;
}

/**
 * Configure Title and Favicon
 * @param param0 Header Props
 */
export default function Header({ title }: HeaderProps) {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
