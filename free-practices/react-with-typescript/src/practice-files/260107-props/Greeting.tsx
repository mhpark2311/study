interface GreetingProps {
  name: string;
}

export default function Greeting({ name }: GreetingProps) {
  return <h1>{name}さん、こんにちは！</h1>;
}
