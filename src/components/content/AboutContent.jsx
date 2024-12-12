import { useEffect, useState } from "react"

export default function AboutContent() {
  const aboutContentText = [
    "/ FULL STACK DEVELOPER",
    "/ TORONTO, CANADA",
    "/ USE YOUR KEYBOARD TO NAVIGATE"
  ]

  const [placeholderText, setPlaceholderText] = useState(() => {
    let initState = [];
    aboutContentText.forEach((text) => initState.push("-".repeat(text.length)))
    return initState
  })

  useEffect(() => {
    const intervalIDs = [];

    aboutContentText.forEach((text) => {
      const intervalID = setInterval(() => {
        setPlaceholderText((prevState) => {
          let newText = prevState.split("");
          for(
            let i = Math.floor(Math.random() * (prevState.length + 1));
            i < prevState.length;
            i++
          ){
            if(newText[i] !== text[i]){
              newText[i] = text[i]
              break;
            }
          }
          return newText.join("")
        })
      }, 100)

      intervalIDs.push(intervalID)
    })
  }, [])

  return (
    <div className="h-[250px]">
      {placeholderText.map((text, index) => {
        return(
          <p key={index}>{text}</p>
        )
      })}
    </div>
  )
}
