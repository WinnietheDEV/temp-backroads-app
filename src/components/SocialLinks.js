import { socialLinks } from "../data";

const SocialLinks = (props) => {
  const { parentClass, itemClass } = props;
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        const { id, href, icon } = link;
        return (
          <li key={id}>
            <a
              href={href}
              className={itemClass}
              target="_blank"
              rel="noreferrer"
            >
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
