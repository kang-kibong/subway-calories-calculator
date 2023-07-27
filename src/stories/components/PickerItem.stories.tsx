import PickerItem from "@components/Picker/PickerItem";

export default {
  title: "Component/PickerItem",
  component: PickerItem,
};

export const Default = (args: any) => {
  return <PickerItem {...args} />;
};
