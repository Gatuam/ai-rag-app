import { groq } from "@ai-sdk/groq";
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

    const result = await streamText({
      model: groq("llama-3.3-70b-versatile"),
      prompt: message,
    });

    return result.toUIMessageStreamResponse();
  } catch (err: any) {
    return Response.json(
      { success: false, error: err.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
