import * as React from 'react';

import {
  Container,
  Part,
  PartTitle,
  PartCheckbox,
  Input,
  Upper,
  Bottom,
  Attributes,
  Checkbox,
  Parameters,
  SummaryGroup,
  SummaryItem,
  Background,
} from './styles';

export interface InnerState {
  speed: string | number;
  weapon: string | number;
  helmet: string | number;
  shield: string | number;
  gauntlets: string | number;
  chest: string | number;
  boots: string | number;
}

export interface CheckedState {
  weapon: boolean;
  helmet: boolean;
  shield: boolean;
  gauntlets: boolean;
  chest: boolean;
  boots: boolean;
}

import imageBoots from './assets/items/boots.jpg';
// import imageWeapon from './assets/items/weapon.jpg';

const Item = ({ name, value, checked, handleChange, handleCheck, isAttribute = false }: any) => (
  <Part>
    <Background src={imageBoots} width="100%" />

    {!isAttribute && (
      <PartCheckbox>
        <Checkbox type="checkbox" checked={checked} onChange={handleCheck} />
      </PartCheckbox>
    )}

    <PartTitle>{name}</PartTitle>

    <Input
      name={name}
      value={value}
      onChange={handleChange}
      maxLength={2}
      onFocus={event => event.target.select()}
    />
  </Part>
);

const Summary = ({ checked, speed, ...speeds }: InnerState) => {
  const countChecked = Math.floor(Object.values(checked).filter(isChecked => isChecked).length / 2);
  const totalSpeed = Object.values(speeds).reduce((a, b) => a + parseInt(b, 10), 0);
  const bonusSpeed = Math.floor(parseInt(speed, 10) * (0.12 * countChecked));

  return (
    <SummaryGroup>
      <SummaryItem>Base speed: <strong>{speed}</strong></SummaryItem>
      <SummaryItem>Set bonus: <strong>{countChecked * 12} % / {bonusSpeed}</strong></SummaryItem>
      <SummaryItem>Speed: <strong>{parseInt(speed, 10) + bonusSpeed + totalSpeed}</strong></SummaryItem>
    </SummaryGroup>
  );
};

const Raid = () => {
  const [values, setValue] = React.useState<InnerState>({
    speed: 100,
    banner: 0,
    weapon: 0,
    helmet: 0,
    shield: 0,
    gauntlets: 0,
    chest: 0,
    boots: 0,
  });

  const [checked, setChecked] = React.useState<CheckedState>({
    weapon: false,
    helmet: false,
    shield: false,
    gauntlets: false,
    chest: false,
    boots: false,
  });

  const handleChange = (name: string) => (e: any) => {
    const { value } = e.target;

    setValue(prevState => ({ ...prevState, [name]: value }));
  };

  const handleCheck = (name: string) => (e: any) => {
    const { checked } = e.target;

    setChecked(prevState => ({ ...prevState, [name]: checked }));
  };

  const {
    speed,
    weapon,
    helmet,
    shield,
    gauntlets,
    chest,
    boots,
    banner,
  } = values;

  return (
    <Container>
      <Summary {...values} checked={checked} />
      <Parameters>
        <Input
          value={speed}
          onChange={handleChange('speed')}
        />
      </Parameters>

      <Upper>
        <Item
          name="weapon"
          value={weapon}
          checked={checked.weapon}
          handleCheck={handleCheck('weapon')}
          handleChange={handleChange('weapon')}
        />

        <Item
          name="helmet"
          value={helmet}
          checked={checked.helmet}
          handleCheck={handleCheck('helmet')}
          handleChange={handleChange('helmet')}
        />

        <Item
          name="shield"
          value={shield}
          checked={checked.shield}
          handleCheck={handleCheck('shield')}
          handleChange={handleChange('shield')}
        />
      </Upper>

      <Bottom>
        <Item
          name="gauntlets"
          value={gauntlets}
          checked={checked.gauntlets}
          handleCheck={handleCheck('gauntlets')}
          handleChange={handleChange('gauntlets')}
        />

        <Item
          name="chest"
          value={chest}
          checked={checked.chest}
          handleCheck={handleCheck('chest')}
          handleChange={handleChange('chest')}
        />

        <Item
          name="boots"
          value={boots}
          checked={checked.boots}
          handleCheck={handleCheck('boots')}
          handleChange={handleChange('boots')}
        />
      </Bottom>

      <Attributes>
        {/* <Item
          name="ring"
          value={ring}
          handleChange={handleChange('ring')}
          isAttribute
        />

        <Item
          name="amulet"
          value={amulet}
          handleChange={handleChange('amulet')}
          isAttribute
        /> */}

        <Item
          name="banner"
          value={banner}
          handleChange={handleChange('banner')}
          isAttribute
        />
      </Attributes>
    </Container>
  );
};

export default Raid;
