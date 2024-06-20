import { ReactNode } from 'react';

export const UiFormPageLayout = ({
  header,
  form,
  title,
}: {
  header?: ReactNode;
  form?: ReactNode;
  title?: string;
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      {header}
      <main className="grow flex flex-col pt-24">
        <div className="rounded-xl border border-slate-300 px-14 pt-8 pb-16 w-full max-w-[400px] bg-white self-center">
          <h1 className="text-center text-2xl mb-6">{title}</h1>
          {form}
        </div>
      </main>
    </div>
  );
};
