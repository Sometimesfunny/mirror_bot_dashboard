import styles from './App.module.scss';
import { NavBar } from './components/nav-bar/nav-bar';
import { ServerSelector } from './components/server-selector/server-selector';
import { MainBody } from './components/main-body/main-body';

function App() {
    console.log('app');

    return (
        <div className={styles.App}>
            <NavBar />
            <div className={styles['main-screen']}>
                <ServerSelector />
                <MainBody />
            </div>
        </div>
    );
}

export default App;
