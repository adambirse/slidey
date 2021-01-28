import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

interface MarkdownProps {
  children: string;
}

export default function Content(props: MarkdownProps): JSX.Element {
  return <ReactMarkdown plugins={[gfm]} children={props.children} />;
}
