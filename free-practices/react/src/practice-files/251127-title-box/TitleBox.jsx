function TitleBox({ title, children }) {
  return (
    <div style={{ border: '1px solid #333', padding: '12px', marginBottom: '12px', width: '50%' }}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export default TitleBox;
