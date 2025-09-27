import { tavily } from "@tavily/core";

export const webSearch = async ({ query }: { query: string }) => {
  const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });

  if (!query) return;

  const response = await tvly.search(query, { maxResults: 1 });
    const realContent = response.results.map((res)=> res.content).join('\n\n')
    console.log(response)
    console.log(realContent)
  return realContent;
};
