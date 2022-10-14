import Link from "next/link";
import styles from '../styles/NavBar.module.css'

export default function NavBar() {
    return (
        <div>
            <ul className={styles.navbar}>
        <li>
          <Link href="/pants/products"><a>Produtos</a></Link>
        </li>
        <li>
          <Link href="/about"><a>About</a></Link>
        </li>
      </ul>
        </div>
    )
}