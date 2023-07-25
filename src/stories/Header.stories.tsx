import Header from "@components/Header";

export default {
  title: "Component/Header",
  component: Header,
};

export const Default = (args: any) => {
  return <Header {...args} />;
};
