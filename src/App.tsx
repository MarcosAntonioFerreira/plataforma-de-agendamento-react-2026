import Text from "./components/text";
import CalendarBlank from "./assets/icons/CalendarBlank.svg?react";
import Icon from "./components/icon";
import Button from "./components/button";

export default function App() {

  return (
    <>
      <Text variant="title-lg-bold">
        Olá mundo!
      </Text>
      <CalendarBlank className="fill-yellow" />
      <Icon svg={CalendarBlank} className='--color' />
      <Button
        onClick={()=>alert("teste")}
      >Teste</Button>
      
    </>

  )
}

