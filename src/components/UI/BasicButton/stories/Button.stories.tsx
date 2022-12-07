import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import BasicButton from "..";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/BasicButton",
  component: BasicButton,
  argTypes: {
    type: {
      type: {
        required: true,
        name: "enum",
        value: ["primary", "secondary", "ghost", "border"],
      },
      defaultValue: "primary",
      name: "type",
    },
    customClass: {
      type: {
        required: false,
        name: "string",
      },
    },
    disable: {
      type: {
        name: "boolean",
        required: false,
      },
    },
    isLink: {
      type: {
        name: "boolean",
        required: false,
      },
    },
    linkHref: {
      type: {
        name: "string",
        required: false,
      },
      if: { arg: "isLink" },
    },
    loading: {
      type: {
        name: "boolean",
        required: false,
      },
    },
    size: {
      type: {
        name: "enum",
        value: ["sm", "md", "lg", "xl"],
      },
    },
  },
} as ComponentMeta<typeof BasicButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BasicButton> = (args) => (
  <BasicButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  children: "Button",
  size: "md",
};
Primary.play = async ({ args, canvasElement }) => {
  //Get Elements
  const canvas = within(canvasElement);
  const button = await canvas.findByRole("button");

  //Action
  userEvent.click(button);

  //Assertion
  expect(args.onClick).toHaveBeenCalled();
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  children: "Button",
  size: "md",
};

export const Ghost = Template.bind({});
Ghost.args = {
  type: "ghost",
  children: "Button",
  size: "md",
};

export const Border = Template.bind({});
Border.args = {
  type: "border",
  children: "Button",
  size: "md",
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: "primary",
  children: "Button",
  size: "md",
  disable: true,
};
Disabled.play = async ({ canvasElement }) => {
  //Get Elements
  const canvas = within(canvasElement);
  const button = await canvas.findByRole("button");

  //Assertion
  expect(button).toHaveClass("border-lineDisabled");
};

export const DisabledBorder = Template.bind({});
DisabledBorder.args = {
  type: "border",
  children: "Button",
  size: "md",
  disable: true,
};
DisabledBorder.play = async ({ canvasElement }) => {
  //Get Elements
  const canvas = within(canvasElement);
  const button = await canvas.findByRole("button");

  //Assertion
  expect(button).toHaveClass("!border-lineDisabled");
};

export const LoadingPrimary = Template.bind({});
LoadingPrimary.args = {
  type: "primary",
  children: "Button",
  size: "md",
  loading: true,
};
LoadingPrimary.play = async ({ canvasElement }) => {
  //Get Elements
  const canvas = within(canvasElement);
  const button = await canvas.findByRole("button");
  const loadingSpinner = within(button).getByTestId("loading-spinner");
  //Assertion
  expect(loadingSpinner).toBeInTheDocument();
};

export const LoadingBorder = Template.bind({});
LoadingBorder.args = {
  type: "border",
  children: "Button",
  size: "md",
  loading: true,
};
LoadingBorder.play = async ({ canvasElement }) => {
  //Get Elements
  const canvas = within(canvasElement);
  const button = await canvas.findByRole("button");
  const loadingSpinner = within(button).getByTestId("loading-spinner");
  //Assertion
  expect(loadingSpinner).toBeInTheDocument();
};

export const Link = Template.bind({});
Link.args = {
  type: "primary",
  children: "Its a Link",
  size: "md",
  isLink: true,
  linkHref: "https://www.link.com",
};
Link.play = async ({ args, canvasElement }) => {
  //Get Elements
  const canvas = within(canvasElement);
  const button = await canvas.findByTestId("button");

  //Assertion
  expect(button).toHaveAttribute("href", args.linkHref);
};

export const Small = Template.bind({});
Small.args = {
  type: "primary",
  children: "Button",
  size: "sm",
};

export const Large = Template.bind({});
Large.args = {
  type: "primary",
  children: "Button",
  size: "lg",
};

export const XLarge = Template.bind({});
XLarge.args = {
  type: "primary",
  children: "Button",
  size: "xl",
};
