import Banner from "@components/Banner";

export default {
  title: "Component/Banner",
  component: Banner,
};

export const Default = (args: any) => {
  return <Banner {...args} />;
};
