import Text from "./components/text";
import CalendarBlank from "./assets/icons/CalendarBlank.svg?react";
import Icon from "./components/icon";
import Button from "./components/button";
import InputChekbox from "./components/input-checkbox";
import ButtonIcon from "./components/button-icon";
import InputText from "./components/input-text";

export default function App() {

  return (
    <>
      <Text variant="title-lg-bold">
        Olá mundo!
      </Text>
      <CalendarBlank className="fill-yellow" />
      <Icon svg={CalendarBlank} className='fill-gray-100' />
      <Button
        onClick={() => alert("teste")}
      >Teste</Button>
      <ButtonIcon
        icon={CalendarBlank}
        onClick={() => alert("teste")}
      />
      <Button
        disabled
        onClick={() => alert("teste")}
      >Teste</Button>
      <InputChekbox>
        15:00
      </InputChekbox>
      <InputChekbox
        disabled={true}
      >
        15:00
      </InputChekbox>
      <InputText
        icon={CalendarBlank}
        placeholder="Nome do cliente"
        className="focus:outline-none"
      />
    </>

  )
}

