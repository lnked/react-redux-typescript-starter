import * as React from 'react';

import {
  Container,
  Part,
  PartTitle,
  PartCheckbox,
  Input,
  Upper,
  Bottom,
  Checkbox,
  SummaryGroup,
  SummaryItem,
} from './styles';

export interface InnerState {
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

const Item = ({ name, value, checked, handleChange, handleCheck }: any) => (
  <Part>
    <img src={imageBoots} width="100%" />

    <PartCheckbox>
      <Checkbox type="checkbox" checked={checked} onChange={handleCheck} />
    </PartCheckbox>

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

const Summary = ({ checked, ...speeds }: InnerState) => {
  const countChecked = Math.floor(Object.values(checked).filter(isChecked => isChecked).length / 2);

  return (
    <SummaryGroup>
      <SummaryItem>Set bonus: <strong>{countChecked * 12} %</strong></SummaryItem>
      <SummaryItem>Speed: <strong>{Object.values(speeds).reduce((a, b) => a + parseInt(b, 10), 0)}</strong></SummaryItem>
    </SummaryGroup>
  );
};

const Raid = () => {
  const [values, setValue] = React.useState<InnerState>({
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
    weapon,
    helmet,
    shield,
    gauntlets,
    chest,
    boots,
  } = values;

  return (
    <Container>
      <Summary {...values} checked={checked} />

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
    </Container>
  );
};

export default Raid;
