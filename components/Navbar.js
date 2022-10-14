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
        <li>
          <Link href='/cats'><a>Gatos</a></Link>
        </li>
        <li>
          <Link href='/todos'><a>to-do</a></Link>
        </li>
      </ul>
        </div>
    )
}