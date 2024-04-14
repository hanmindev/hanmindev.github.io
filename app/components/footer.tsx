import { EmailIcon, GithubIcon, LinkedInIcon } from "@/app/components/icons/contact";

export function Footer() {
  return (
    <footer className="flex justify-end space-x-4 -mt-12 mr-8">
      <span className="tooltip tooltip-top" data-tooltip="Email">
        {/*<address>*/}
        <a href="mailto:hanminkim123@gmail.com/"
           target="_blank"
           rel="noreferrer">
            <EmailIcon />
          </a>
        {/*</address>*/}
      </span>

      <span className="tooltip tooltip-top" data-tooltip="LinkedIn">
        {/*<address>*/}
        <a href="https://www.linkedin.com/in/hanminkim03/"
           target="_blank"
           rel="noreferrer">
            <LinkedInIcon />
          </a>
        {/*</address>*/}
      </span>

      <span className="tooltip tooltip-top" data-tooltip="GitHub">
        {/*<address>*/}
        <a href="https://github.com/hanmindev/"
           target="_blank"
           rel="noreferrer">
            <GithubIcon />
          </a>
        {/*</address>*/}
      </span>
    </footer>
  );
}