import styles from './header.module.scss'

export default function Header() {
  return(
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/">
          <img src="/images/logo.png" alt="logo" />
        </a> 
      </div>
    </header>
  );
}
