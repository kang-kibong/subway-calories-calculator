import GlobalThemeProvider from "@/assets/styles/GlobalThemeProvider";
import BaseLayout from "@components/common/BaseLayout";

export default {
  title: "Component/common/BaseLayout",
  componrnt: BaseLayout,
};

export const Default = (args: any) => {
  return (
    <GlobalThemeProvider>
      <BaseLayout {...args} />
    </GlobalThemeProvider>
  );
};
