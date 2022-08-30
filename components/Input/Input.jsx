import { Input, WrapperInput } from "./Input.styles";
import { mdiMagnify } from "@mdi/js";
import { Icon } from "@mdi/react";
import { useContext } from "react";
import { WeatherContext } from "../../Context";

export default function StyledInput() {
  const { city, handleInput, searchData } = useContext(WeatherContext);
  return (
    <WrapperInput>
      <div>
        <Input
          onChange={handleInput}
          value={city}
          placeholder="Digite sua Localização"
        />
      </div>
      <div>
        <Icon path={mdiMagnify} size={1} color={"black"} onClick={searchData} />
      </div>
    </WrapperInput>
  );
}
