import * as React from 'react';

import {
  Container,
  Part,
  PartTitle,
  Input,
  Upper,
  Bottom,
  SummaryGroup,
  SummaryItem,
} from './styles';

export interface InnerState {
  weapon: string | number;
  helmet: string | number;
  shield: string | number;
  gauntlets: string | number;
  armour: string | number;
  boots: string | number;
}

const Item = ({ name, value, handleChange }: any) => (
  <Part>
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

const Summary = ({ ...speeds }: InnerState) => (
  <SummaryGroup>
    <SummaryItem>Speed: <strong>{Object.values(speeds).reduce((a, b) => a + parseInt(b, 10), 0)}</strong></SummaryItem>
  </SummaryGroup>
);

const Raid = () => {
  const [values, setValue] = React.useState<InnerState>({
    weapon: 0,
    helmet: 0,
    shield: 0,
    gauntlets: 0,
    armour: 0,
    boots: 0,
  });

  const handleChange = (name: string) => (e: any) => {
    const { value } = e.target;

    setValue(prevState => ({ ...prevState, [name]: value }));
  };

  const {
    weapon,
    helmet,
    shield,
    gauntlets,
    armour,
    boots,
  } = values;

  return (
    <Container>
      <Summary {...values} />

      <Upper>
        <Item
          name="weapon"
          value={weapon}
          handleChange={handleChange('weapon')}
        />

        <Item
          name="helmet"
          value={helmet}
          handleChange={handleChange('helmet')}
        />

        <Item
          name="shield"
          value={shield}
          handleChange={handleChange('shield')}
        />
      </Upper>

      <Bottom>
        <Item
          name="gauntlets"
          value={gauntlets}
          handleChange={handleChange('gauntlets')}
        />

        <Item
          name="armour"
          value={armour}
          handleChange={handleChange('armour')}
        />

        <Item
          name="boots"
          value={boots}
          handleChange={handleChange('boots')}
        />
      </Bottom>
    </Container>
  );
};

export default Raid;
