
import ListBox from "../components/ListBoxCountry"
export default function Header(choice = []) {
  return (
    <nav className="container flex">
      <ListBox />
    </nav>
  )
}

