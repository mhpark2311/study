import Button from './Button';

export default function ButtonApp() {
  return (
    <>
      <Button
        handleClick={(message: string) => alert(message)}
        message="Button1 clicked"
      >
        Button1
      </Button>
      {/* <Button>Button2</Button> */}
    </>
  );
}
