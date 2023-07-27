import Button from "@components/common/Button";

export default {
  title: "Component/common/Button",
  component: Button,
};

export const Default = (args: any) => {
  return <Button {...args}>확인</Button>;
};
