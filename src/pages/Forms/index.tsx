import * as React from 'react';

import { JsonPretty } from 'components';
import { SyntheticForm } from './form';
// import { SyntheticForm, NaturalForm } from './form'

import {
  Input,
  Select,
  Textarea,
} from './styles';

export interface OuterProps {
  initialCount?: number;
}

export function Forms({ ui, app }: any) {
  return (
    <React.Fragment>
      <JsonPretty json={ui} />
      <JsonPretty json={app} />
      {/*
      <NaturalForm style={{ border: '1px solid lime', padding: 10 }}>
        {({ values }) => (
          <div>{JSON.stringify(values)}</div>
        )}
      </NaturalForm>
      */}

      <SyntheticForm
        onSubmit={(values, { setSubmitting }) => {
          alert('submit');
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          },         500);
        }}
        initialValues={{ text: 'test' }}
        validationSchema={{
          email: ['notEmpty', 'isEmail'],
        }}
      >
        {({ values, isValid, isDirty, handleSubmit, handleReset, handleChange, isSubmitted, isValidated }) => (
          <form onSubmit={handleSubmit} onReset={handleReset}>
            <JsonPretty json={{ ...values, isValid, isDirty, isSubmitted, isValidated }} />

            <Input name="text" value={values.text} onChange={handleChange} />

            <Input name="name" value={values.name} placeholder="Name" onChange={handleChange} />

            <Input name="value" value={values.value} placeholder="Value" onChange={handleChange} />

            <Input name="number" type="number" value={values.number} onChange={handleChange} />

            <Input name="checkbox" type="checkbox" onChange={handleChange} />

            <Input name="radio" type="radio" value={1} onChange={handleChange} />
            <Input name="radio" type="radio" value={2} onChange={handleChange} />
            <Input name="radio" type="radio" value={3} onChange={handleChange} />

            <Textarea name="textarea" placeholder="Textarea" onChange={handleChange} />

            <Select name="select" onChange={handleChange} >
              <option value={1}>Option 1</option>
              <option value={2}>Option 2</option>
              <option value={3}>Option 3</option>
              <option value={4}>Option 4</option>
              <option value={5}>Option 5</option>
              <option value={6}>Option 6</option>
            </Select>

            <Select name="multiSelect" onChange={handleChange} multiple>
              <option value={1}>Option 1</option>
              <option value={2}>Option 2</option>
              <option value={3}>Option 3</option>
              <option value={4}>Option 4</option>
              <option value={5}>Option 5</option>
              <option value={6}>Option 6</option>
            </Select>

            <button type="reset">Reset test</button>
            <button type="submit">Submit test</button>

            <button type="submit" disabled={!(isSubmitted && isValidated) || !isValid || !isDirty}>
              Submit
            </button>
          </form>
        )}
      </SyntheticForm>
    </React.Fragment>
  );
}
