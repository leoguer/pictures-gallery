
import ListBox from "../components/ListBoxCountry"
import { useState } from "react"


export default function SearchBarView(choice = []) {
  const placeholderText = {FR: "Quelle image cherchez vous?",GB: "What picture do you search ?"}
  const [language, setLanguage] = useState('GB')
  
  const handleLanguage = (e) => {
    setLanguage(e)
  }
  
  return (
    <nav className="container flex flex-row items-center">
      <ListBox onLanguage={handleLanguage} />
        <input
          type="text"
          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder={placeholderText[language]}
        />
        <button
        onClick={() => console.log('click')} 
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Button
        </button>
    </nav>
  )
}

