import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from "@components/Card";
import {withDndProvider} from "../decorators/withDndProvider";

export default {
  title: 'Example/Card',
  component: Card,
  decorators: [
      withDndProvider
  ]
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}/>

export const Default = Template.bind({});
Default.args = {
  id: 1,
  index: 1,
  title: "Some todo"
}