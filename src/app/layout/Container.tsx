/** @jsxImportSource @emotion/react */

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: 400,
  margin: "0 auto",
  scrollY: "auto",
  scrollX: "hidden",
  backgroundColor: "white",
  minHeight: "100vh",
} as const;

function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div css={containerStyles}>{children}</div>;
}

export default Container;
