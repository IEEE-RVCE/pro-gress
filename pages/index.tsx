import Header from '../components/Header';
import TableLet from '../components/TableLet';
import styles from '../styles/Home.module.css';
import { images } from '../lib/locations';

/**
 * Home page
 */
export default function Home() {
    return (
        <div className={styles.container}>
            <Header title="Work in Progress"></Header>
            <header>
                <TableLet {...images}></TableLet>
                <div className="spacer-top-margin-more">
                    <h1>Work in progress</h1>
                    <h3>Check back soon&#8482;</h3>
                </div>
            </header>
        </div>
    );
}
