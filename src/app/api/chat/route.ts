import { groq } from "@/lib/ai";
import { streamText } from "ai";

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
          content:
            "You are a smart person response the ans in short and ight way",
        },
        {
          role: "user",
          content: message,
        },
      ],
      model: "openai/gpt-oss-20b",
      tools: [
        {
          type: "function",
          function: {
            name: "get_current_weather",
            description: "Get the current weather in a given location",
            parameters: {
              type: "object",
              properties: {
                location: {
                  type: "string",
                  description: "The city and state, e.g. San Francisco, CA",
                },
                unit: {
                  type: "string",
                  enum: ["celsius", "fahrenheit"],
                },
              },
              required: ["location"],
            },
          },
        },
      ],
    });

    return Response.json(
      { success: true, message: result.choices[0].message },
      { status: 200 }
    );
  } catch (err: any) {
    return Response.json(
      { success: false, error: err.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
