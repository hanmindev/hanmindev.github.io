import { EmailIcon, GithubIcon, LinkedInIcon } from "@/app/components/icons/contact";

export function Footer() {
  return (
    <footer className="absolute pb-4 xl:-mb-0 xl:pb-0 xl:fixed bottom-8 right-8 flex justify-end space-x-4 z-10">
      <span className="tooltip tooltip-top" data-tooltip="Email">
        <a href="mailto:hanminkim123@gmail.com/"
           target="_blank"
           rel="noreferrer">
            <EmailIcon />
          </a>
      </span>

      <span className="tooltip tooltip-top" data-tooltip="LinkedIn">
        <a href="https://www.linkedin.com/in/hanminkim03/"
           target="_blank"
           rel="noreferrer">
            <LinkedInIcon />
          </a>
      </span>

      <span className="tooltip tooltip-top" data-tooltip="GitHub">
        <a href="https://github.com/hanmindev/"
           target="_blank"
           rel="noreferrer">
            <GithubIcon />
          </a>
      </span>
    </footer>
  );
}