import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Navbar } from "@components/Navbar";
import withRouter from "../decorators/withRouter";

export default {
  title: 'Example/Navigation Bar',
  component: Navbar,
  decorators: [withRouter]
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args}/>

export const Default = Template.bind({});