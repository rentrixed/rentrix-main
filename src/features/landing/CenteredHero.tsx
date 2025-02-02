import { badgeVariants } from '@/components/ui/badge';

const CenteredHero = (props: {
  banner: {
    href: string;
    text: React.ReactNode;
  };
  title: React.ReactNode;
  description: string;
  buttons: React.ReactNode;
}) => (
  <>
    <div className="text-center">
      <a
        className={badgeVariants()}
        href={props.banner.href}
        target="_blank"
        rel="noopener"
      >
        {props.banner.text}
      </a>
    </div>

    <div className="mt-3 text-center text-5xl font-medium tracking-tight">
      {props.title}
    </div>

    <div className="mx-auto mt-5 max-w-screen-md text-center text-xl font-medium">
      {props.description}
    </div>

    <div className="mt-8 flex justify-center gap-x-5 gap-y-3 max-sm:flex-col">
      {props.buttons}
    </div>
  </>
);

export { CenteredHero };
