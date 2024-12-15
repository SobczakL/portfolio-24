import { useEffect, useState } from "react"

export default function AboutContent() {
  const aboutContentText = [
    "/ FULL STACK DEVELOPER",
    "/ TORONTO, CANADA",
    "/ USE YOUR KEYBOARD TO NAVIGATE"
  ]

  const [placeholderText, setPlaceholderText] = useState(() => {
    let initState = [];
    aboutContentText.map(text => initState.push("-".repeat(text.length)))
    return initState
  })

  useEffect(() => {
    const intervalIDs = aboutContentText.map((text, index) => 
      setInterval(() => {
        setPlaceholderText(prevTexts => {
          const newTexts = [...prevTexts]

          const currentPlaceholder = newTexts[index]
          const newPlaceholder = currentPlaceholder.split('')

          const randomIndex = Math.floor(Math.random() * currentPlaceholder.length)

          if(newPlaceholder[randomIndex] !== text[randomIndex]){
            newPlaceholder[randomIndex] = text[randomIndex]
            newTexts[index] = newPlaceholder.join('')
          }

          return newTexts;
        })
      }, 100)
    )

    return () => {
      intervalIDs.forEach(clearInterval)
    }
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
