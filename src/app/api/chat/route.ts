import { groq } from "@/lib/ai";
import { webSearch } from "@/lib/webserach";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    if (!message) {
      return Response.json(
        { success: false, message: "Message is required" },
        { status: 400 }
      );
    }

    const result = await groq.chat.completions.create({
      temperature: 0.1,
      messages: [
        {
          role: "system",
          content: `You are a smart person. Respond short and correct.
            You can use tools:
            1. webSearch({query}) // search realtime data
            current date and time is ${new Date().toUTCString()} 
            
            `,
        },
        { role: "user", content: message },
      ],
      model: "openai/gpt-oss-20b",
      tools: [
        {
          type: "function",
          function: {
            name: "webSearch",
            description: "Search the latest information realtime data",
            parameters: {
              type: "object",
              properties: {
                query: { type: "string", description: "the search query" },
              },
              required: ["query"],
            },
          },
        },
      ],
      tool_choice: "auto",
    });

    const msg = result.choices[0].message;
    const toolCalls = msg?.tool_calls || [];

    if (toolCalls.length === 0) {
      return Response.json(
        { success: true, message: { content: msg?.content ?? "" } },
        { status: 200 }
      );
    }

    for (const tool of toolCalls) {
      const args = safeParse(tool.function.arguments);
      if (tool.function.name === "webSearch" && args?.query) {
        const toolResult = await webSearch({ query: args.query });
        return Response.json(
          { success: true, message: { content: toolResult ?? "" } },
          { status: 200 }
        );
      }
    }
    return Response.json(
      { success: false, error: "No tool executed" },
      { status: 500 }
    );
  } catch (err: any) {
    console.error("Chat API error:", err);
    return Response.json(
      { success: false, error: err.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}

function safeParse(str: string) {
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}
