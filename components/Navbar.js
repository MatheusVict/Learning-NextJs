import Link from "next/link";

export default function NavBar() {
    return (
        <div>
            <ul>
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