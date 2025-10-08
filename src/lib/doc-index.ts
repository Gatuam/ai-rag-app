import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

export async function indexTheDoc(filePath: string) {
  const loader = new PDFLoader(filePath, {
    splitPages: false,
  });
  const doc = await loader.load();

  console.log(doc[0].pageContent);
}

indexTheDoc("./Aung-San-Suu-Kyi-Profile.pdf");
