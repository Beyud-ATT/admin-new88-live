import { App, ConfigProvider } from "antd";

export default function ThemeProvider({ children }) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemPaddingInline: "30px",
            darkItemHoverBg: "var(--color-brand-primary)",
            darkItemSelectedBg: "var(--color-brand-primary)",
            iconSize: 20,
            itemHeight: 50,
            groupTitleFontSize: 20,
            itemMarginBlock: 15,
          },
          Form: {
            labelColor: "white",
          },
        },
      }}
    >
      <App>{children}</App>
    </ConfigProvider>
  );
}
