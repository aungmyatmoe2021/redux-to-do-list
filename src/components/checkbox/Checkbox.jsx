import React, { useRef } from 'react';
import cssClasses from './Checkbox.module.css';

import Icon from '@mdi/react';
import { mdiCheck } from '@mdi/js';

import Center from '../center/Center';
import Flex from '../flex/Flex';
import Text from '../text/Text';

const Checkbox = ({
  checked,
  size,
  color,
  name,
  handleClick,
  circle,
  label,
}) => {
  const checkboxInput = useRef(null);

  let background = '#fff';
  let iconColor = '#cbcbcb';
  if (checked) {
    background = color || '#42caae';
    iconColor = '#fff';
  }

  let labelEl = null;
  if (label) {
    labelEl = (
      <Flex>
        <Text>{label}</Text>
      </Flex>
    );
  }

  return (
    <Flex padding='0' align='center'>
      <Flex padding='0'>
        <div
          className={cssClasses.checkbox}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            background,
            borderRadius: circle ? 50 + '%' : '',
          }}
          onClick={() => checkboxInput.current.click()}
        >
          <Center>
            <Icon path={mdiCheck} size='16px' color={iconColor}></Icon>
          </Center>
          <input
            style={{ display: 'none' }}
            type='checkbox'
            name={name}
            checked={checked}
            onChange={handleClick}
            ref={checkboxInput}
          />
        </div>
      </Flex>
      {labelEl}
    </Flex>
  );
};

export default Checkbox;
