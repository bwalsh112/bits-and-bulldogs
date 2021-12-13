import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import TailwindBlog from "../components/TailwindBlog";
import TailwindPage from "../components/TailwindPage";
import { MailIcon, MenuIcon, PhoneIcon, XIcon } from "@heroicons/react/outline";
const offices = [
  {
    id: 1,
    city: "Los Angeles",
    address: ["4556 Brendan Ferry", "Los Angeles, CA 90210"],
  },
  {
    id: 2,
    city: "New York",
    address: ["886 Walter Streets", "New York, NY 12345"],
  },
  {
    id: 3,
    city: "Toronto",
    address: ["7363 Cynthia Pass", "Toronto, ON N3Y 4H8"],
  },
  { id: 4, city: "London", address: ["114 Cobble Lane", "London N1 2EF"] },
];
export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      {/* <TailwindPage /> */}
      {/* Header */}
      <div className="flex justify-center">
      <div style={{width: '1100px'}}>
        <TailwindBlog />
      </div>
      </div>
      {/* <div className="container">
        <TailwindBlog />
        <div>
          <h1>
            Hi, We're Next.js & Netlify<span className="fancy">.</span>
          </h1>
          <span className="handle">@nextjs-netlify-blog</span>
          <h2>A blog template with Next.js and Netlify.</h2>
          <SocialList />
        </div>
      </div> */}
    </Layout>
  );
}
