import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  const { name } = props.params;
  console.log("name for Greet page", name);
  return <div>Hello {name}</div>;
}
