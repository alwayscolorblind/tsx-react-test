import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import TodoForm from "@components/TodoForm";

export default {
  title: 'Example/Todo Form',
  component: TodoForm
} as ComponentMeta<typeof TodoForm>

const Template: ComponentStory<typeof TodoForm> = (args) => <TodoForm {...args}/>

export const Default = Template.bind({});