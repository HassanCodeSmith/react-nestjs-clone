import { useState } from "react";
import {
  GITHUB_SELECTED_ICON,
  GITHUB_UNSELECTED_ICON,
  LINKEDIN_SELECTED_ICON,
  LINKEDIN_UNSELECTED_ICON,
  LOGO,
  TWITTER_SELECTED_ICON,
  TWITTER_UNSELECTED_ICON,
} from "../../assets";
import styles from "./headerStyles.module.css";

export const HeaderComponent = () => {
  const [hoveredIcon, setHoveredIcon] = useState<
    null | "github" | "twitter" | "linkedin"
  >(null);
  return (
    <header>
      <img src={LOGO} className={styles.logo} alt="NestJS Logo" />
      <nav>
        <ul>
          <li>Documentation</li>
          <li>Enterprise</li>
          <li>New Resources</li>
          <li>
            <a
              href=""
              onMouseEnter={() => setHoveredIcon("github")}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <img
                src={
                  hoveredIcon === "github"
                    ? GITHUB_SELECTED_ICON
                    : GITHUB_UNSELECTED_ICON
                }
                alt="GitHub Icon"
              />
            </a>
          </li>
          <li>
            <a
              href=""
              onMouseEnter={() => setHoveredIcon("twitter")}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <img
                src={
                  hoveredIcon === "twitter"
                    ? TWITTER_SELECTED_ICON
                    : TWITTER_UNSELECTED_ICON
                }
                alt="Twitter (X) Icon"
              />
            </a>
          </li>
          <li>
            <a
              href=""
              onMouseEnter={() => setHoveredIcon("linkedin")}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <img
                src={
                  hoveredIcon === "linkedin"
                    ? LINKEDIN_SELECTED_ICON
                    : LINKEDIN_UNSELECTED_ICON
                }
                alt="LinkedIn Icon"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
