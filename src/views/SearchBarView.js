
import userEvent from "@testing-library/user-event"
import ListBox from "../components/ListBoxCountry"
import { useState } from "react"
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'


export default function SearchBarView(props) {
  const placeholderText = {FR: "Quelle image cherchez vous?",GB: "What picture do you search ?"}
  const [language, setLanguage] = useState('GB')
  const [input, setInput] = useState('')
  
  const handleLanguage = (e) => {
    setLanguage(e)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onParamsChange()
    }
  }

  const onParamsChange = () => {
    const path = `&lang=${language=='GB'? 'EN': language}&q=${input.split(' ').join('+')}`;
    props.onParamsChange(path, language)
  }
  
  return (
    <nav className=" flex flex-row items-stretch sticky top-1 h-10 drop-shadow-xl border border-black/10 rounded-full z-10">
      <ListBox onLanguage={handleLanguage} />
        <input
          type="text"
          className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 focus:outline-none placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder={placeholderText[language]}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
        onClick={onParamsChange} 
        className="group bg-white hover:bg-orange-300 font-semibold hover:text-white py-2 px-4 rounded-r-full">
         <MagnifyingGlassIcon
         className="h-6 w-6 text-gray-900/30 group-hover:text-white"
         aria-hidden="true" />
        </button>
    </nav>
  )
}

