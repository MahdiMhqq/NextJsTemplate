import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CircleSpinner from "..";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/Circle Spinner",
  component: CircleSpinner,
  argTypes: {},
} as ComponentMeta<typeof CircleSpinner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CircleSpinner> = (args) => {
  return <CircleSpinner {...args} />;
};

export const Default = Template.bind({});
Default.args = {};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  innerSpinnerClass: "border-t-white border-2",
  customClass: "w-10",
};
CustomStyle.play = async ({ args, canvasElement }) => {
  //Elements
  const canvas = within(canvasElement);
  const spinner = canvas.getByTestId("loading-spinner");
  const spinnerInnerSection = document.querySelector(
    "#root [data-testid='loading-spinner'] > div"
  );

  //Assertion
  await expect(spinner).toHaveClass(args.customClass as string, { exact: false });
  await expect(spinnerInnerSection).toHaveClass(args.innerSpinnerClass as string, {
    exact: false,
  });
};
