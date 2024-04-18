import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import MMM from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkRehype from "remark-rehype";

const MarkdownWrapper = ({ children }: PropsWithChildren) => (
  <div
    className="
    prose
    prose-h3:text-blue-700
    prose-p:text-[12px]
    prose-p:font-medium
    prose-p:leading-[14px]
    prose-p:text-slate-700
    prose-ul:text-[12px]
    prose-ul:font-medium
    prose-ul:leading-[16px]
    prose-ul:text-slate-700
    prose-li:my-2
    prose-li:pl-0
    prose-li:marker:text-[14px]
    prose-li:marker:text-blue-700
    prose-h3:text-[14px]
    prose-h3:leading-4

    q1920:prose-p:text-[14px]
    q1920:prose-p:leading-[18px]
    q1920:prose-ul:leading-[18px]
    q1920:prose-ul:text-[14px]
    q1920:prose-li:my-1
    q1920:prose-li:marker:text-[16px]
    q1920:prose-h3:text-[16px]
    q1920:prose-h3:leading-5
    q1920:first-of-type:prose-p:mb-1
    q1920:prose-p:m-1
    q1920:prose-h3:m-1
    q1920:prose-ul:m-1

    q960:prose-p:text-[14px]
    q960:prose-p:leading-[18px]
    q960:prose-ul:leading-[18px]
    q960:prose-ul:text-[14px]
    q960:prose-li:my-0
    q960:prose-li:marker:text-[14px]
    q960:prose-ul:pl-5
    q960:prose-h3:text-[14px]
    q960:prose-h3:leading-4
    q960:first-of-type:prose-p:mb-1
    q960:prose-p:m-1
    q960:prose-h3:m-1
    q960:prose-ul:m-1

    q640:prose-p:text-[14px]
    q640:prose-p:leading-[14px]
    q640:prose-ul:leading-5
    q640:prose-ul:text-[12px]
    q640:prose-li:my-0
    q640:prose-li:marker:text-[16px]
    q640:prose-ul:pl-5
    q640:prose-h3:text-[16px]
    q640:prose-h3:leading-6
    q640:first-of-type:prose-p:mb-1
    q640:prose-p:m-1
    q640:prose-h3:m-1
    q640:prose-ul:m-1
"
  >
    {children}
  </div>
);
export type IMMMProps = {
  titleId?: string;
};

export const Markdown = ({
  children,
  titleId,
}: PropsWithChildren<IMMMProps>) => {
  const { t } = useTranslation();
  const content = titleId ? t(titleId) : children;
  if (!content) {
    return null;
  }

  return (
    <MarkdownWrapper>
      <MMM remarkPlugins={[remarkRehype]} rehypePlugins={[rehypeRaw]}>
        {content.toString()}
      </MMM>
    </MarkdownWrapper>
  );
};
