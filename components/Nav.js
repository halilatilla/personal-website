const SocialLinks = [
  { href: "https://github.com/halilatilla", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/halilatilla",
    label: "Linkedin",
  },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => {
  return (
    <nav className="navbar bg-base-100 container mx-auto">
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case text-xl"
          href="https://medium.com/@halilatilla"
          target="_blank"
          rel="noreferrer"
        >
          Medium ✍️
        </a>
      </div>

      {SocialLinks.map(({ key, href, label }) => (
        <a
          className="btn btn-ghost normal-case text-xl"
          key={key}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
