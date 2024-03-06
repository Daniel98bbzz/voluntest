import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <footer className="footer-menu">
      <nav className="footer-nav">
        <Link href="/" className="footer-item">
          <img
            src="/Images/svgs/home-svgrepo-com.svg"
            alt="Home"
            className="footer-icon"
          />
          <span>Home</span>
        </Link>
        <Link href="/applications" className="footer-item">
          <img
            src="/Images/svgs/book-svgrepo-com.svg"
            alt="Applications"
            className="footer-icon"
          />
          <span>Applications</span>
        </Link>
        <Link href="/opportunites" className="footer-item">
          <img
            src="/Images/svgs/bookmark-svgrepo-com.svg"
            alt="Opportunities"
            className="footer-icon"
          />
          <span>Opportunities</span>
        </Link>
        <a href="/favorites" className="footer-item">
          <img
            src="/Images/svgs/heart-svgrepo-com.svg"
            alt="Favorite"
            className="footer-icon"
          />
          <span>Favorite</span>
        </a>
        <Link href="/profile" passHref className="footer-item">
          <img
            src="/Images/svgs/profile-svgrepo-com.svg"
            alt="My Profile"
            className="footer-icon"
          />
          <span>Profile</span>
        </Link>
      </nav>
    </footer>
  );
}
