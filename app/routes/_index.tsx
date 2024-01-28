import type { MetaFunction } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const fetcher = useFetcher<string>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <fetcher.Form action="/rag-prompt" method="post">
        <textarea
          name="question"
          style={{
            minHeight: "600px",
            minWidth: "600px",
          }}
        ></textarea>
        <br />
        <button type="submit">opsturen</button>
      </fetcher.Form>

      <p>
        antwoord:
        <br />
        {fetcher.data && fetcher.state !== "submitting" ? fetcher.data : null}
        {fetcher.state === "submitting" && <span>genereren...</span>}
      </p>
    </div>
  );
}
